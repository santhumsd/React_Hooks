import React from 'react'
import useInput from './UseInput'

function InputForm() {
    const [firstName, bindFirstName,resetFirstName] = useInput('')
    const [lastName, bindLastName,resetLastName] = useInput('')
    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`hi ${firstName } ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>firstName</label>
                    <input type='text' 
                    {...bindFirstName}/>
                </div>
                <div>
                    <label>lastName</label>
                    <input type='text' 
                    {...bindLastName}/>
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default InputForm
