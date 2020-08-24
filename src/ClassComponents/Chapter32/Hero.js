import React, { Component } from 'react'

class Hero extends Component {
     
    render() {
        if(this.props.hero==="joker"){
            throw new Error("Joker is not a hero")
        }
        return (
            <div>
                <h1>{this.props.hero}</h1>
            </div>
        )
    }
}

export default Hero
