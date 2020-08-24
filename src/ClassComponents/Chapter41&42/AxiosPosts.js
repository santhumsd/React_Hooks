import React, { Component } from 'react'
import axios from 'axios'
class AxiosPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            this.setState({
                posts:res.data
            })
        }).catch(e=>{
            this.setState({
                errorMsg:"error acuured while fetching"
            })
        })
    }
    render() {
        const {posts,errorMsg}=this.state;
        return (
            <div>
                Posts from Typicode
              {
                posts?
              posts.map(post=><div key={post.id}>{post.title}</div>):null
              }  
              {
                  errorMsg?<div>{errorMsg}</div>:null
              }
            </div>
        )
    }
}

export default AxiosPosts
