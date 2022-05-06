import React from 'react'
import DocTitle from './useEffect'
import { func } from 'prop-types';

export default function MouseContainer(){
    const [display,setDisplay] = React.useState(true)
    const toggle = () =>{
        setDisplay(!display)
    }
    console.log(display)
    return(
        <>
            <button onClick={toggle}>Toggle Display</button>
            {display && <DocTitle />}
        </>
    )
}
