import React, { Component } from 'react';
import WithCounter from './WithCounter';

class ClickCount1 extends Component {

    render() {
        return (
            <div>
                <button onClick={this.eventHandler}> click {this.state.count} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCount1)
