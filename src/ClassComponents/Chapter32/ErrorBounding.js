import React, { Component } from 'react'

class ErrorBounding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error:false
        }
    }
     static getDerivedStateFromError(){
         console.log("in getDerivedStateFromError")
         return {error:true}
     }
     componentDidCatch(e){
         console.log(e)
     }
        render() {
        return (
            <div>
                {(this.state.error)? <h1>Error occured</h1>: this.props.children}
            </div>
        )
    }
}

export default ErrorBounding
