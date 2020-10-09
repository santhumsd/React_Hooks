import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCont=0;
    const[count,setCount]=useState(initialCont)
    const incrementFive=()=>{
     for (let i = 0; i < 5; i++) {
        setCount(prevCount=>prevCount+1)
         
     }
    }
    return (
        <div>
            {count}
            <button onClick={()=>setCount(initialCont)}>reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>increment 1</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrement 1</button>
            <button onClick={incrementFive}>increment 5</button>
        </div>
    )
}

export default HookCounterTwo
