import React from 'react'

export default function ToDo(props){
    const {value,setInputValue}=props
    function handleDelete(index){
        console.log({index})
        value.splice(index,1)
        setInputValue([...value])
    }

    const noteValues =  value.map((values,key) =>{
        return <p key={key}>{`${values}`} 
            <button 
            className='btn btn-danger px-2 py-0 ml-2' 
            onClick={()=>{handleDelete(key)}}> x </button>
        </p>
    })

    return(
        <div>
            <p>{noteValues}</p>
        </div>
    )
}