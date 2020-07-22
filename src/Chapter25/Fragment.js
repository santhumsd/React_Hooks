import React, { Component } from 'react'
import Fragment1 from './Fragment1'

class Fragment extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hi Santhosh</h1>
                <table>
                    <tbody>
                        <tr>
                            <Fragment1/>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Fragment
