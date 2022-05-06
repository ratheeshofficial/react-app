import {useState} from 'react'

export default function useCounter(initialValue = 0,value = 0){
    // const initialValue = 0
    const [count,setCount] = useState(initialValue)

    const handleIncrement = () => {
        setCount((prevCount) => {
           return prevCount + value
        })
    }
    const handleDecrement = () => {
        setCount((prevCount) => {
            return prevCount - value
         })
    }
    const handleReset = () => {
        setCount(initialValue)
    }

    return [count,handleIncrement,handleDecrement,handleReset]
}