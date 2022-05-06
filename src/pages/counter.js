import React from 'react'
import { func } from 'prop-types';

export default function Counter(){
    const [plus,setPlus] = React.useState(0)

    function increment(){
        setPlus((prevPlus) =>{
           return prevPlus + 1
        })
    }
    function decrement(){
        setPlus((prevPlus) =>{
           return prevPlus - 1
        })
    }
    function reset(){
        setPlus(0)
        // console.log(plus)
    }
    return(
        <>
            <h1>React Hooks</h1>
            Count {plus}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}