import React, { Component } from 'react';
import WithCounter from './WithCounter';

class HoverCount1 extends Component {
    
    render() {
        const {count,eventHandler,name}=this.props
        return (
            <div>
                <h1 onMouseOver={eventHandler}> {name} Hover {count} times</h1>
            </div>
        )
    }
}

export default WithCounter(HoverCount1,10)
