import React,{useRef,useEffect,useState} from 'react'

function ClearIntervalwithUseRef() {
    const [timer,setTimer]=useState(0);
    const timerref = useRef(null)
    useEffect(() => {
        timerref.current=setInterval(()=>{
         setTimer(prevState=>prevState+1)
        },1000)
        return () => {
            clearInterval(timerref.current)
        }
    }, [])
    return (
        <div>
            {timer}
            <button onClick={()=>clearInterval(timerref.current)}>clearInterval</button>
        </div>
    )
}

export default ClearIntervalwithUseRef
