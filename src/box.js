import React from 'react'

export default function Box(props){
    const [on,setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? '#000000' : '#ffffff'
    }

    function handleBox(){
        setOn(prevOn => {
            return !prevOn 
        })
    }
    
    return(
        <>
            <div style = {styles} className='border p-4 w-25' onClick={handleBox} ></div>
        </>
    )
}