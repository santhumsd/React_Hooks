import React, { Component } from 'react'

class ComponentB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             PI:3.14
        }
        console.log("ComponetB constructor(prps)")
    }
    
    static getDerivedStateFromProps(state,props){// function parameters are optional
     console.log("ComponetB getDerivedStateFromProps(state,props) ")
     return null;

    }
    componentDidMount(){
        console.log("ComponetB componentDidMount()")
    }
    shouldComponentUpdate(nextProps,nextState){// function parameters are optional
        console.log("ComponentB shouldComponentUpdate(nextProps,nextState)",nextProps,nextState)
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){// function parameters are optional
        console.log("ComponentB getSnapshotBeforeUpdate(prevProps,prevState)",prevProps,prevState)
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapShot){// function parameters are optional
        console.log("ComponentB componentDidUpdate()",prevProps,prevState,snapShot)
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

export default ComponentB
