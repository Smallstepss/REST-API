import React from 'react'
import {useState,useEffect} from 'react'

const ErrorHandled = () => {      
   
       const[posts,setPosts]=useState([])
   
       //Error handling with promise
     useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
     .then((response)=>{
       if(!response.ok){
         throw Error(response.statusText)
       }
       return response.json();
     }).then((data)=>{
       console.log(data);
       setPosts(data);
     })
     .catch((err)=>{
       console.log(err.message);
     });},[])
     
     return(
     <div className="posts-container">
     {posts.map((post)=>{
     return(
       <div className="post-card" key={post.id}>
       <h2 className="post-title">{post.title}</h2>
       <p className="post-body">{post.body}</p>
       <div className="button">
     <div className="delete-btn">Delete</div>
         </div>
       </div>
     
     );
     })}  </div>
     ) 
    
   }
   
  
   


export default ErrorHandled;

{/*

//with async await try and catch


const fetchPost= async()=>{
    try{
        const response=await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        const data=await response.json();
        setPosts(data);
        }
        catch(error){
            console.log(error);
        }
        
    }
};
*/}
