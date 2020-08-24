import React from 'react'

function NameLists() {
    const namelist=["santhosh","sanjeev","someone","someone"]
    return (
        <div>
            {namelist.map((name,index)=><h2 key={index}>{index} {name}</h2>)}
        </div>
    )
}

export default NameLists
