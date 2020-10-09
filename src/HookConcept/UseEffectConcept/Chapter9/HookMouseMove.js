import React,{useState,useEffect} from 'react'

function HookMouseMove() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const logMousePosition=(e)=>{
        console.log("calling multiple time to set the x and y coardinates")
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        console.log("called only once to add the event listener")
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log("component Unmount")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>
            x-{x} y-{y}
        </div>
    )
}

export default HookMouseMove
