import React,{useEffect,useState} from 'react'
import axios from 'axios';
import MyCard from './MyCard'

const HttpAxios = () => {
        const[title,setTitle]=useState('');
        const[body,setBody]=useState('');
        const[posts,setPosts]=useState([]);

const client=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
});

//get request

useEffect(()=>{
        client.get('?_limit=10').then((response)=>{
            setPosts(response.data);
        });
    }, []);

    //post request
    const addPosts=(title,body)=>{
        client.post('',{
            title:title,
            body:body,
        }).then((response)=>{
           setPosts((posts)=>[response.data,...posts])
           setTitle('');
           setBody('');
        
        });

    };

    //deleteRequest

    const deletePost=(id)=>{
        client.delete(`$(id)`);
        setPosts(posts.filter((post)=>{
            return post.id!==id;
        }));
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

export default HttpAxios
