import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        console.log("ComponetB constructor(prps)")
    }
    
    static getDerivedStateFromProps(state,props){
     console.log("ComponetB getDerivedStateFromProps(state,props) ")
     return null;

    }
    componentDidMount(){
        console.log("ComponetB componentDidMount()")
    }
    
    render() {
        console.log("ComponetB render() ")
        return (
            <div>
                <h1>component B</h1>
            </div>
        )
    }
}

export default LifeCycleB
