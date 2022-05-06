import React from 'react'
import axios from 'axios'

export default function DataFetching(){
    const [post,setPost] = React.useState({})
    const [id,setId] = React.useState(1)

    const [FetchData,setFetchData] = React.useState(1)

    React.useEffect(() => {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAA')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res) 
            setPost(res.data)
        })
        // .catch(err => {console.log(err)})
    },[FetchData])

    function handleTitle(event){
        setId(event.target.value)
    }
    const handleClickFetchData = () => {
        setFetchData(id)
    }
    return (
        <>
            <ul>
                <h4>Data Fetching using API</h4>
                {/* {post.map((post) => <li key = {post.id}>
                    {post.title}
                </li> )} */}
                <input type='text' value = {id} onChange={handleTitle} />
                <button onClick={handleClickFetchData}>FetchData</button>
                <p key={post.id}>{post.title}</p>
                
            </ul>
        </>
    )
}