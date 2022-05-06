import React from 'react'
import useCounter from './useCounter'

function CounterOne(){
    const [count,handleIncrement,handleDecrement,handleReset] = useCounter(10,10)
    return(
        <>
            <h5>{count}</h5>
            <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>
            <button className='btn btn-primary' onClick={handleDecrement}>Decrement</button>
            <button className='btn btn-warning' onClick={handleReset}>Reset</button>
        </>
    )
}

export default CounterOne