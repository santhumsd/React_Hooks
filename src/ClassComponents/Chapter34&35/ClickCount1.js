import React, { Component } from 'react';
import WithCounter from './WithCounter';

class ClickCount1 extends Component {

    render() {
        const {count,eventHandler,name}=this.props
        return (
            <div>
                <button onClick={eventHandler}> {name} click {count} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCount1,5)
