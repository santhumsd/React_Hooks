import React, { Component,PureComponent } from 'react'
import MemoComp from './MemoComp'
class ParentCompMemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"santhosh"
        }
    }
    componentDidMount(){
        setInterval(()=>{this.setState({
            name:"santhosh"
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
                <MemoComp name={this.state.name}/>
              
            </div>
        )
    }
}

export default ParentCompMemo
