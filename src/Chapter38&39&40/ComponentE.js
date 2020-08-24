import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                using contextType {this.context}
                <ComponentF/>
            </div>
        )
    }
}
//ComponentE.contextType=UserContext//if we use contextType then the multiple context will be not possible so we can use UserProvider with UserConsumer

export default ComponentE
