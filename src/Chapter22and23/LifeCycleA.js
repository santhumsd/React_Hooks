import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:this.props.count
        }
        console.log("ComponentA constructor(prps)")
    }
    
    static getDerivedStateFromProps(state,props){
     console.log("ComponentA getDerivedStateFromProps(state,props) ")
     return null;

    }
    componentDidMount(){
        console.log("ComponentA componentDidMount()")
    }
    
    render() {
        console.log("ComponentA render() ")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <h1>component A</h1>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
