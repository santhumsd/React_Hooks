import React, { Component,PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:[0,1,2]
        }
    }
    componentDidMount(){
        setInterval(()=>{this.setState({
            count:this.state.count
        })},2000)
    }
    //  componentDidMount(){
    //      console.log("componentDidMount")
    //     setInterval(()=>{this.setState(prevState => ({
    //         count: [...prevState.count, 3]
    //       }))},2000)
    // }
    
    render() {
        console.log("parent Render")
        return (
            <div>
                <RegComp count={this.state.count}/>
                <PureComp count={this.state.count}/>
            </div>
        )
    }
}

export default ParentComp
