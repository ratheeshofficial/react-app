import React from 'react'

export default function IntervalHookCounter(){
    const [count,setCount] = React.useState(0)

    const tick = () =>{
        setCount(() => {
            return count + 1
        })
    }

    React.useEffect(() =>{
        // console.log('Raaaaaaaaaaaaaaaaaa')
        const interval = setInterval(tick,1000)

        return () => {
            clearInterval(interval)
        }
    },[count])

    return(
        <>
        <h5>Seconds Running</h5>
            {/* {count} */}
        </>
    )
}