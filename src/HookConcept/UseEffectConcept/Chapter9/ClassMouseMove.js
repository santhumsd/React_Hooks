import React, { Component } from 'react'

class ClassMouseMove extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x:0,
             y:0
        }
    }
    logMousePosition=(e)=>{
    console.log("called multiple times")
      this.setState({
          x:e.clientX,
          y:e.clientY
      })
    }
    componentDidMount(){
        console.log("called only once to add eventlistener")
      window.addEventListener('mousemove',this.logMousePosition)
    }
    render() {
        return (
            <div>
                x-{this.state.x}  y-{this.state.y}
            </div>
        )
    }
}

export default ClassMouseMove
