import React from 'react'

export default function UseStateArray(){
    const [items,setItems] = React.useState([])

    const addItem = () =>{
        setItems( () => {
            return [...items,{
                id: items.length,
                value : Math.floor(Math.random() * 10) + 1
            }]
        })
    }
    return(
        <>
            <h5>UseState Array</h5>
            <ul>
            {items.map((item) => 
                <li key = {item.id}>
                    {item.value}
                </li>
                )}
            </ul>
            <button onClick={addItem}>Click</button>
        </>
    )
}