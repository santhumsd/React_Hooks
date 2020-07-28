import React from 'react'

const WithCounter=(WrappeddComponent,increment)=> {
   
    
class WithCounter extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    eventHandler=()=>{
        this.setState((prevState)=>{
            return{
                count:prevState.count+increment
            }
        },console.log("from setstate"))
    }
    
        render() {
            return (
                <div>
                    <WrappeddComponent eventHandler={this.eventHandler} count={this.state.count} {...this.props}/>
                </div>
            )
        }
    }
    
    return WithCounter
}

export default WithCounter
