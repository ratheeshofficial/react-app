import React from 'react'

export default function WindowTracker(){
    const [width,SetWidth] = React.useState(true)

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    function handleChange(){
        SetWidth((prevWidth) =>{
          return  prevWidth ? false : true
        })
    }

    React.useEffect(() => {
        function watchWidth(){
            setWindowWidth(() => {
                return window.innerWidth
            })
        }

        window.addEventListener('resize',watchWidth)

        return function(){
            window.removeEventListener('resize',watchWidth)
        }
    },[])

    return (
        <>
            <button className='btn btn-warning' onClick={handleChange}>Toogle Width</button>
            { width && <h1> Window Width : {windowWidth} </h1>}
        </>
    )
}