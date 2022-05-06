import React from 'react'

export default function InputValue(){
    const [name,setName] = React.useState(
        {
            firstName: '',
            lastName: ''
        }
    )

    function firstName(e){
        setName(() => {
            return {
                ...name,firstName: e.target.value,
            }
        })
    }

    function lastName(event){
        setName(() => {
            return {
                ...name,lastName : event.target.value,
            }
        })
    }

    return(
        <>
            <h3>UseState using Object</h3>
            <input type = 'text' value={name.firstName} onChange={firstName} />
            <input type = 'text' value={name.lastName} onChange={lastName} />
            <h5>My firstName is {name.firstName} </h5>
            <h5>My LastName is {name.lastName} </h5>
            <h5>{JSON.stringify(name)}</h5>

        </>
    )
}