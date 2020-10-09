import React from 'react'
import useCounter from './UseCounter';

function CustomCounter2() {
    const[count,increment,decrement,reset] =useCounter(10,10);

    return (
        <div>
             {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CustomCounter2
