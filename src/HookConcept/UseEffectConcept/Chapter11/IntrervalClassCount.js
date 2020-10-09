import React, { Component } from 'react'

class IntrervalClassCount extends Component {
    constructor(props) {
        super(props)
        this.interval=null;
        this.state = {
             count:0
        }
    }
    tick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
   
    componentDidMount(){
        console.log("componentDidMount")
         this.interval=setInterval(this.tick,1000)
    }
       componentWillUnmount(){
        console.log("componentWillUnmount")
      clearInterval(this.interval)
     }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default IntrervalClassCount
