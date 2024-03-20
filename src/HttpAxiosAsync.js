import React,{useEffect,useState} from 'react'
import axios from 'axios';
import MyCard from './MyCard'

const HttpAxiosAsync = () => {
        const[title,setTitle]=useState('');
        const[body,setBody]=useState('');
        const[posts,setPosts]=useState([]);

const client=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
});

//GET REQUEST with axios

useEffect( ()=>{
const fetchPost=async ()=>{
    let response= await client.get('?_limit=10');

    setPosts(response.data);
};
fetchPost();
},[]);

// post request  with axios

const addPosts=async(title,body)=>{
    let response= await client.post('',
    {title:title,
    body:body,
});
setPosts((posts)=>[response.data,...posts]);
setTitle('');
setBody('');
};

//Delete request  with axios

const deletePost= async (id)=>{
    await client.delete(`$id`);

    setPosts(posts.filter((post)=>{
        return post.id!==id;
    }))

}

//handling Errors 
const fetchPost= async ()=>{
    try{
        let response=await client.get('?_limit-10');
        setPosts(response.data);
    } catch(error){
        console.log(error);
    }
};

    const handleSubmit=(e)=>{
        e.preventDefault();
        addPosts(title,body);

    }


    return(
        <>
            <div className="posts-container">
           { posts.map((post)=>{
            const handleClick=()=>{
                    deletePost(post.id);
                                }
            return( 
             
             <MyCard handleClick={handleClick} key={post.id} post={post}/>
             )
                
            })}

            </div>
            <div className="App">
<div className="add-post-container">
<form onSubmit={handleSubmit}>
 <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
 <textarea cols="10" rows="10" className="form-control" value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
<button type="submit">ADD POST</button>
</form>

</div>
</div>

        </>
    )



}

export default HttpAxiosAsync
