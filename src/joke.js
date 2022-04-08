import React from 'react'

export default function Joke(props){
    return(
        <div className="mt-4">
            <p>{props.setup && <h3>Setup : {props.setup}</h3>}</p>
            <h4>{props.punchline}</h4>
            <hr />
        </div>
    )
}