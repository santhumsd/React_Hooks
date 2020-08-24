import React, { Component } from 'react';

class ClickCount extends Component {
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
                <button onClick={this.eventHandler}> click {this.state.count} times</button>
            </div>
        )
    }
}

export default ClickCount
