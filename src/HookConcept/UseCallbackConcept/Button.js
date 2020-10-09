import React from 'react'

function Button({children,clickHandler}) {
    console.log(`rendering-${children}`)
    return (
        <div>
            <button onClick={clickHandler}>{children}</button>
        </div>
    )
}

export default React.memo(Button) 

