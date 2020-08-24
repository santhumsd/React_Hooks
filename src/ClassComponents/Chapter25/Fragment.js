import React, { Component } from 'react'
import Fragment1 from './Fragment1'

class Fragment extends Component {
    render() {
        return (
             <>{}
                <h1>Hi Santhosh</h1>
                <table>
                    <tbody>
                        <tr>
                            <Fragment1/>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default Fragment
