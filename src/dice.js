import React from 'react'

export default function Dice(props){
    function allNewDice(){
        const newDice = []
        for(let i = 0; i < 12; i++){
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }

    console.log(allNewDice())

    return(
        <div className='col-lg-2 mb-3'>
            <button className='border rounded px-3 py-2 '>{props.value}</button>
        </div>
    )
}