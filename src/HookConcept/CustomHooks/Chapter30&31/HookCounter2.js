import React, { useState } from 'react'
import useDocumentTitle from './UseDocumentTitle'

function HookCounter2() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>count-{count}</button>
        </div>
    )
}

export default HookCounter2
