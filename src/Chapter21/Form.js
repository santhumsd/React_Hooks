import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:"",
             description:"",
             topic:"React"
        }
    }
    handleInput= (event) =>{
        this.setState({
            userName:event.target.value
        })

    }
    handleTextArea=(event)=>{
        this.setState({
            description:event.target.value
        })
    }
    handleSubmit =(event)=>{
     event.preventDefault()
     alert(`${this.state.userName} ${this.state.description} ${this.state.topic}`)
     console.log("san")
    }
    handleTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    render() {
      const {userName,description,topic}=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                 <div>
                <label>UserName</label>
                <input value={userName} onChange={this.handleInput}/>
                </div>
                <div>
                <label>Description</label>
                <textarea value={description} onChange={this.handleTextArea} ></textarea>
                </div>
                <div>
              
                <label>Topic</label>
                <select value={topic} onChange={this.handleTopic}>
                    <option>React</option>
                    <option>Vue</option>
                    <option>Node</option>
                </select>
                </div>
                <div>
               <button type="submit">submit</button>
               
                </div>
            </form>
           
        )
    }
}

export default Form
