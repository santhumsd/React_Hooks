import React,{useEffect,useState}from 'react';
import axios from 'axios';
function FetchPostOnClick() {
    const[post,setPost]=useState({});
    const[id,setId]=useState(1);
    const[idFromButtonClick,setIdFromButtonClick]=useState(1)

    useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
          .then((res)=>{
              console.log(res.data)
             setPost(res.data)
          })
          .catch(e=>{
              console.log(e)
          })
    },[idFromButtonClick])
   
    return (
        <div>
            <input
                 type='text'
                 value={id}
                 onChange={e=>setId(e.target.value)}/>
                 <button onClick={()=>setIdFromButtonClick(id)}>fetch Post</button>
            <h1>{post.title}</h1>
        </div>
    )
}

export default FetchPostOnClick
