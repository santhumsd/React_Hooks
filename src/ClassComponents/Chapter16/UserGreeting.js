import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn:false
        }
    }
    
    render() {
        // if(this.state.isLoggedIn) return <div>hello santhosh </div>  
        //  else 
        //   return <div> hello guest </div>


    //   let message;
    //   if(this.state.isLoggedIn) message=<div>hello santhosh</div>
    //   else
    //   message=<div>hello Guest</div>

    //   return(
    //       <div>
    //           {message}
    //       </div>
    //   )

    //   return this.state.isLoggedIn ?( <div>hello santhosh</div>):( <div>hello Guest</div>)
    
    //  return <div>hello {this.state.isLoggedIn ? "santhosh":"Guest"}</div>
    
    return this.state.isLoggedIn && <div>hello santhosh</div>
    
    }
}

export default UserGreeting
