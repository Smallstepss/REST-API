import React,{useState,useEffect} from 'react'

//with async await in the actual way..use this .

const HttpRequestAsync = () => {

const[posts,setPosts]=useState([]);
const[title,setTitle]=useState('');
const[body,setBody]=useState('');

//Get request with fetch API

useEffect(()=>{

const fetchPost=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

    const data=await response.json();// convert to js object

    console.log(data);
    setPosts(data);
};
fetchPost();

},[]);

//Delete post with fetch API

const deletePost=async (id)=>{
    let response=await fetch( `https://jsonplaceholder.typicode.com/posts/${id}`,
    {method:'DELETE',});
if(response.status===200){
    setPosts(
        posts.filter((post)=>{
            return post.id!==id
        })
    );
}
else {return;}
};

//post with fetch API

const addPosts=async ()=>{
let response =await fetch('https://jsonplaceholder.typicode.com/posts',
{method:'POST',
body:JSON.stringify(
    {title:title,
    body:body,
    userId:Math.random().toString(36).slice(2),}),
    headers:{
        'content-type':'application/json;charset=UTF-8',
    },
});
let data=await response.json();
setPosts((posts)=>[data,...posts]);
setTitle('');
setBody('');
};

const handleSubmit=(e)=>{
    e.preventDefault();
    addPosts(title,body);
}

    return(
        <>
      <div className="posts-container">
      {posts.map((post)=>{
      return(
        <div className="post-card" key={post.id}>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
        <div className="button">
      <div className="delete-btn" onClick={()=>{deletePost(post.id)}}>Delete</div>
          </div>
        </div>
      
      );
      })}  </div>
      
      <div className='app'>
          <div className='add-post-container'>
            <form onSubmit={handleSubmit}>
              <input type="text" className="form-control" value={title}  onChange={(e)=>setTitle(e.target.value)}/>
              
              <textarea name="" className="form-control" id="" cols="10" row="8" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
              <button type="submit">Add post</button>
            </form>
      
          </div>  
      </div>
      </>
    )
}

export default HttpRequestAsync;
