import React, { Component } from 'react';
import ComponentB from './ComponentB'

class ComponentA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:this.props.count
        }
        console.log("ComponentA constructor(prps)")
    }
    
    static getDerivedStateFromProps(state,props){// function parameters are optional
     console.log("ComponentA getDerivedStateFromProps(state,props) ")
     return null;

    }
    componentDidMount(){
        console.log("ComponentA componentDidMount()")
    }

    shouldComponentUpdate(nextProps,nextState){// function parameters are optional
        console.log("ComponentA shouldComponentUpdate(nextProps,nextState)",nextProps,nextState)
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){// function parameters are optional
        console.log("ComponentA getSnapshotBeforeUpdate(prevProps,prevState)",prevProps,prevState)
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapShot){// function parameters are optional
        console.log("ComponentA componentDidUpdate()",prevProps,prevState,snapShot)
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        console.log("ComponentA render() ")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <h1>component A</h1>
                <ComponentB count={this.state.count}/>
            </div>
        )
    }
}

export default ComponentA
