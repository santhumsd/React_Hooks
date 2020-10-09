import React from 'react'
import useCounter from './UseCounter'

function CustomCounter1() {
   const[count,increment,decrement,reset] =useCounter(0,1);

    return (
        <div>
             {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CustomCounter1
