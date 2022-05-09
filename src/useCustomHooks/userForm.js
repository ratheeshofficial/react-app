import React from 'react'
import useInput from './useInput'

export default function UserForm(){
    console.log(useInput)
    const [firstName,bindFirstName,resetFirstName] = useInput('tsd')
    const [lastName,bindLastName,resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <div className='my-3'>
                    <label>First Name</label>
                    <input type='text' 
                    // value={firstName} 
                    // onChange={(event) => setFirstName(event.target.value) } 
                    {...bindFirstName}
                    />
                </div>
                <div className='my-3'>
                    <label>Last Name</label>
                    <input type='text' 
                    // value={lastName} 
                    // onChange={(event) => setLastName(event.target.value) }
                    {...bindLastName}
                     />
                </div>
                <div className='my3'>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}