import React,{useEffect,useRef} from 'react'

function FocusInput(){

    const inputRef = useRef(null)
    // console.log(inputRef)

    useEffect(() => {
        inputRef.current.focus()
    },[])

    return(
        <>
            <input ref={inputRef} type='text' />
        </>
    )
}

export default FocusInput