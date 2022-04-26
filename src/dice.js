import React from 'react'

export default function Dice(props){
    const styles = {
        backgroundColor: props.isHeld ? '#ad5389' : '#ebedee'
    }
    return(
        <div className='col-lg-2 mb-3' >
            <button className='border rounded px-3 py-2' style={styles} onClick={props.holdDice}>{props.value}</button>
        </div>
    )
}