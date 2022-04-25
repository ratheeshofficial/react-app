import React from 'react'

export default function Joke(props){
    const [isShown,setIsShown] = React.useState(false)

    function handleToggle(){
        setIsShown((prevShown) => {
            return prevShown == false ? true : false 
            
        })
    }

    const [messages,setMessages] = React.useState(['a','b'])

    return(
        <div className="mt-4">
            {<p>{props.setup && <h3>Setup : {props.setup}</h3>}</p>}
            {isShown && <p>{props.punchline}</p>}
            <button className='btn btn-primary' onClick={handleToggle}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
            {messages.length === 0 ? <h3>You Are all caught up</h3> : 
            <h3>You Have {messages.length} unread {messages.length > 1 ? 'messages' : 'message'}</h3>}
        </div>
    )
}