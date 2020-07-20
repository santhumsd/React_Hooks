import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:"hello"
        }
        this.eventHandlers=this.eventHandlers.bind(this)//best aproach if we are not using arrow function
    }
    eventHandlers(){
        this.setState({
            message:"hi buddy"
        })
        console.log("clicked")
    }
    // eventHandler=()=>{
    //     this.setState({
    //         message:"hi buddy"
    //     })
    //     console.log("clicked")
    // }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.eventHandlers.bind(this)}>click firstApproach binding event while calling</button> */}
                {/* <button onClick={this.eventHandler}>click SecondApproach using arrowfuction and call normally</button> */}
                {/* <button onClick={()=>this.eventHandlers()}>click 3rdApproach calling the action using arrow function in the event</button> */}
                <button onClick={this.eventHandlers}>click 4thApproach binding the 'this' to function in constructor</button>
            </div>
        )
    }
}

export default EventBind
