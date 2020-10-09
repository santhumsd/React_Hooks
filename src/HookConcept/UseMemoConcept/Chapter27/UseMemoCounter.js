import React,{useState,useMemo} from 'react'


function UseMemoCounter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const incrementCounterOne=()=>{
       setCounterOne(counterOne+1)
    }
    const incrementCounterTwo=()=>{
        setCounterTwo(counterTwo+1)
     }
    const isEven=useMemo(()=>{
        console.log("san")
        let i=0;
        while(i<2000000000) i++
        return counterOne % 2===0
    }, [counterOne])
    return (
        <div>
            <div>
            <button onClick={incrementCounterOne}>counter One - {counterOne}</button>
             {isEven?" Even ":" Odd "}
            </div>
            <div>
            <button onClick={incrementCounterTwo}>counter One - {counterTwo}</button>
            </div>
            
        </div>
    )
}

export default UseMemoCounter
