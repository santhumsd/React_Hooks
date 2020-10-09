import React, { Component } from 'react'

class ClassClearInterval extends Component {
    constructor(props) {
        super(props)
        this.interval=null;
        this.state = {
          timer:0   
        }
    }
    componentDidMount(){
      this.interval=setInterval(()=>{
          this.setState(prevState=>({timer:prevState.timer+1}))
      },1000)
    }
    componentWillUnmount(){
        console.log("san")
       clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                {this.state.timer}
                <button onClick={()=>clearInterval(this.interval)}>cleartimer</button>
            </div>
        )
    }
}

export default ClassClearInterval

