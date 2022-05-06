import React from 'react'
import { func } from 'prop-types';

export default function DocTitle(){
    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState({
        firstName: '',
    })

    const logMousePosition = () => {
        // console.log('Mouse Event')
    }

    React.useEffect(() =>{
        console.log('count')
        // document.title=`Count ${count} item`
        window.addEventListener('mousemove',logMousePosition)

        return() => {
            console.log('Component Unmounting Code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    function handleInputChange(e){
        setName( (prevName) => {
            return {...prevName,firstName:e.target.value}
        })
    }
    
    return (
        <>
            {/* <input type='text' onChange={handleInputChange} value={name.firstName} /> */}
            <button onClick={() => setCount( count + 1)}>Count {count} item</button>
        </>
    )
}