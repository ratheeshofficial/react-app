import React,{useEffect} from 'react'
import useTitleHooks from './useTitleHooks'

function DocTitleTwo(){
    const [count,setCount] = React.useState(0)

    const handleCountClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // },[count])
    useTitleHooks(count)

    return(
        <>
            <button onClick={handleCountClick} >Count {count}</button>
        </>
    )
}

export default DocTitleTwo