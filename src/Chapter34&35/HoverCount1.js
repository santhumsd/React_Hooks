import React, { Component } from 'react';
import WithCounter from './WithCounter';

class HoverCount1 extends Component {
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.eventHandler}> Hover {this.state.count} times</h1>
            </div>
        )
    }
}

export default WithCounter(HoverCount1)
