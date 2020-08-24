import React from 'react'

function Destructuring(props) {
    const {name,lastName}=props;
    return (
        <div>
            <p>{name},{lastName}</p>
        </div>
    )
}

export default Destructuring
