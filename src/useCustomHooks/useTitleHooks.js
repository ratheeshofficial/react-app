import React,{useEffect} from 'react'

export default function useTitleHooks(count){
    useEffect(() => {
        document.title = `Count ${count}`
    },[count])
}