import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increment(){
     // this.state.count=this.state.count+1//this wont work it wont give the error but it wont update the component
     this.setState((prevState,props)=>({
         count:prevState.count+1
     }),()=>{console.log(this.state.count)}) //to set the state depending uponn the prevState please use callback funtion by pasing parameter
     //console.log(this.state.count)//this will show the old state value because it will be calledbefore setting the state becuase setStae is asynchronous
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
              <h1>count- {this.state.count}</h1>
              <button onClick={()=>this.incrementFive()}>increment</button>  
            </div>
        )
    }
}

export default Counter;
