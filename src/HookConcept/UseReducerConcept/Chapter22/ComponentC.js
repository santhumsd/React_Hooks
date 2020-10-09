import React,{useContext} from 'react'
import {countContext} from './UseReducerUseContext'
function ComponentC() {
    const {dispatch,count}=useContext(countContext)
    return (
        <div>
            ComponentC count - {count}
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
        </div>
    )
}

export default ComponentC
