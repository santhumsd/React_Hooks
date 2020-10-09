import React,{useEffect,useState} from 'react';
import axios from 'axios'
function FetchPosts() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((res)=>{
                 console.log(res)
                 setPosts(res.data)
             })
             .catch((e)=>{
                 console.log(e)
             })
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map(post=><li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default FetchPosts
