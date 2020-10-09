import React,{useState} from 'react'
import HookMouseMove from '../Chapter9/HookMouseMove'

function HookContainerUnMount() {
    const [display,setDisplay]=useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>toggle display</button>
            {display && <HookMouseMove/>}
        </div>
    )
}

export default HookContainerUnMount

