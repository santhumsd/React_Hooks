import React from 'react'

const initstate=0

const reducer=(state,action)=>{
   
           console.log("entered reducer") 
           let san=state+1
           console.log("after increment",san)
           return san
     

}
let san1=initstate
const useSanExp=(reducer,state)=>{
    console.log("only one time")
    
   const dispatch=(action)=>{
         console.log("inside dispatch")
         const san=reducer(state,action)
         console.log("inside dispatch ",san)
         san1=san
         state=san
        
   }
    return[san1,dispatch]
}
function SanExperiment() {
    const [sanvar,dispatch]=useSanExp(reducer,initstate)
    
    return (
        <div>
            <button onClick={()=>{dispatch("san")}}>clickme {sanvar}</button>
        </div>
    )
}

export default SanExperiment
