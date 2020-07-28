import React from 'react'

const WithCounter=(WrappeddComponent)=> {
   
    
class WithCounter extends React.Component {
        render() {
            return (
                <div>
                    <WrappeddComponent />
                </div>
            )
        }
    }
    
    return WithCounter
}

export default WithCounter
