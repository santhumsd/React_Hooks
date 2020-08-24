import React from 'react'

function EventHandler() {

   function onclickHandler(){
        console.log("fumnctionalcomponent buttonclicked")
    }
    return (
        <div>
            <button onClick={onclickHandler}>functionclick</button>
        </div>
    )
}

export default EventHandler
