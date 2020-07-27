import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef();
    }
    focusInput(){
        this.inputRef.current.focus();
    }
    heyBaby(){
        alert('hi san')
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                
            </div>
        )
    }
}

export default Input
