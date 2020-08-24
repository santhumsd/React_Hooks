import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            body: "",
            userId: ""
        }
    }
  handler=(e)=>{
   this.setState({[e.target.name]:e.target.value})
  }
  submitHandler=(e)=>{
      e.preventDefault();
      axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
      .then(res=>{
          console.log(res)
      })
      .catch(e=>{
          console.log(e)
      })

  }
    render() {
        const {title,userId,body}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input 
                        type="text"
                        name="title" 
                        value={title}
                        placeholder="title" 
                        onChange={this.handler} />
                    </div>
                    <div>
                        <input 
                        type="text"
                        name="body" 
                        value={body}
                        placeholder="body" 
                        onChange={this.handler} />
                    </div>
                    <div>
                        <input 
                        type="text"
                        name="userId" 
                        value={userId}
                        placeholder="userId" 
                        onChange={this.handler} />
                    </div>
                    <div>
                       <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm
