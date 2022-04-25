import React from 'react'

export default function Body(props){
     const [value,setValue] = React.useState()
    return(
        <>
            <h3>Welcome Back {props.name} </h3>
        </>
    )
}