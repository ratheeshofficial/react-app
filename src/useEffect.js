import React from 'react'

export default function UseEffect(){
    const [starWarsData,setStarWarsData] = React.useState({})
    const[add,SetAdd] = React.useState(0)


    function handleAdd(){
        SetAdd(() =>{
            return add + 1
        })
    }
    React.useEffect(() => {
        console.log('component Ran')
        fetch(`https://swapi.dev/api/people/` + add)
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    },[add])

    return (
        <div className='mb-3'>
            <pre>{JSON.stringify(starWarsData,null,2)}</pre>
            <p>The Count is {add}</p>
            <button onClick = {handleAdd} >Add</button>
        </div>
    )
}