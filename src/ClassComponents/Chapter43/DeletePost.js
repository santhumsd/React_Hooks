import React, { Component } from 'react';
import axios from 'axios'

class DeletePost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:0
        }
    }
    handler=(e)=>{
        console.log(e.target.value,this.state.id)
       this.setState({
           id:e.target.value
       })
    }
    deletePost=(e)=>{
        e.preventDefault()
        console.log("api call")
         axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
              .then((res)=>{
                  console.log(res)
              })
              .catch((e)=>{
                  console.log(e)
              })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.deletePost}>
                    <label>id</label>
                    <input value={this.state.id} onChange={this.handler}/>
                    <button>DeletePost</button>
                </form>
                
            </div>
        )
    }
}

export default DeletePost
