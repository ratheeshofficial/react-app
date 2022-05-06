import React from 'react'
import useCounter from './useCounter'

function CounterTwo(){
    const [count,handleIncrement,handleDecrement,handleReset] = useCounter(0,1)
    return(
        <>
            <h5>{count}</h5>
            <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>
            <button className='btn btn-primary' onClick={handleDecrement}>Decrement</button>
            <button className='btn btn-warning' onClick={handleReset}>Reset</button>
        </>
    )
}

export default CounterTwo