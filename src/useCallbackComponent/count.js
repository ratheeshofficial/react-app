import React from 'react'

 function Count({text,count}){
    console.log(`${text} ${count}`)

    return(
        <>
            <p>{text} - {count}</p>
        </>
    )
}

export default React.memo(Count)