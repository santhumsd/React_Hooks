import React,{useReducer} from 'react'
const initialState={
    firstCounter:0,
    secondCounter:10
}
const reducer=(state,action)=>{
     switch (action.type) {
         case "increment":
             return {...state,firstCounter:state.firstCounter+action.value}
         case "decrement":
             return {...state,firstCounter:state.firstCounter-action.value}    
         case "increment2":
             return {...state,secondCounter:state.secondCounter+action.value}
         case "decrement2":
             return {...state,secondCounter:state.secondCounter-action.value} 
             
         case "reset":
             return initialState
         default:
             return state
            
     }
}
function UseReducerObjectCounter() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <h1>{count.secondCounter}</h1>
            <button onClick={()=>dispatch({type:"increment",value:1})}>incrementfirstcounter 1</button>
            <button onClick={()=>dispatch({type:"decrement",value:1})}>decrementfirstcounter 1</button>
            <button onClick={()=>dispatch({type:"increment",value:5})}>incrementfirstcounter 5</button>
            <button onClick={()=>dispatch({type:"decrement",value:5})}>decrementfirstcounter 5</button>
            <div>
            <button onClick={()=>dispatch({type:"increment2",value:1})}>incrementsecondcounter 1</button>
            <button onClick={()=>dispatch({type:"decrement2",value:1})}>decrementsecondcounter 1</button>
            </div>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
    )
}

export default UseReducerObjectCounter
