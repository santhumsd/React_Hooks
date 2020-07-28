import React, { Component } from 'react'

class HoverCount extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    eventHandler=()=>{
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }
        },console.log("from setstate"))
    }
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.eventHandler}> Hover {this.state.count} times</h1>
            </div>
        )
    }
}

export default HoverCount
