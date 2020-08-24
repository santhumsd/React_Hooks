import React, { Component } from 'react'

class ClassEventHandler extends Component {
    onclickHandler(){
      console.log("from class component")
    }
    render() {
        return (
            <div>
                <button onClick={this.onclickHandler}>classclick</button>
            </div>
        )
    }
}

export default ClassEventHandler
