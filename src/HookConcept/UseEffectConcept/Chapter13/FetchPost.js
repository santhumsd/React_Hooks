import React,{useEffect,useState}from 'react';
import axios from 'axios';

function FetchPost() {
    const[post,setPost]=useState({});
    const[id,setId]=useState(1);

    useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res)=>{
              console.log(res.data)
             setPost(res.data)
          })
          .catch(e=>{
              console.log(e)
          })
    },[id])
   
    return (
        <div>
            <input
                 type='text'
                 value={id}
                 onChange={e=>setId(e.target.value)}/>
            <h1>{post.title}</h1>
        </div>
    )
}

export default FetchPost

