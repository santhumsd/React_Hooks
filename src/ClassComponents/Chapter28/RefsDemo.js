import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
      this.inputRef=React.createRef();   
      this.cbRef=null;
      this.cbRefHandler=(element)=>{
      this.cbRef=element;
      }     
    }
    handler=()=>{
        alert(this.inputRef.current.value)
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        
        //this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
             <input type="text" ref={this.inputRef}/> 
             <input type="text" ref={this.cbRefHandler}/>
             <button onClick={this.handler}>click</button>  
            </div>
        )
    }
}

export default RefsDemo
