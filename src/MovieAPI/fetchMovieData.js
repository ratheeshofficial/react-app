import React from 'react'
import axios from 'axios'
import Netflix from '../img/netflix.png'
import Amazon from '../img/amazon-prime.png'
import '../App.css';

export default function FetchMovieData(){
    const [post,setPost] = React.useState([])
    console.log(post)
   
    const [searchValue,setSearchValue] = React.useState('')

    const [searchValueLength,setSearchValueLength] = React.useState(false)

    React.useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=5cab87b3&plot=full`)
        .then(res => {
            setPost(res.data)
        })
    },[searchValue])

    const errorValue = <p>Enter Movie Name</p>

    const searchHandler = () => {
        console.log('SearchHandler')
        searchValue.length < 3 ? setSearchValueLength(true) : setSearchValueLength(false)
        
    }

    return(
        <>
            <h1>Enter Your Fav Hollywood Movie : ) </h1>
            <input type='search' onChange={(e) => setSearchValue(e.target.value)} />
            
            <button onClick={searchHandler}>Search Movie</button>
            {searchValueLength &&  (
                <p> Enter atleast 3 charactors</p>
            )}
            <div>{searchValue === '' ? errorValue : console.log('value is there')}</div>
          
            <div className='row'>
            
                {post.Search ? post.Search.map((movie) => 
                
                    <div className="col-lg-3 my-3">
                        <div className="card w-100 h-100" id={movie.imdbID}>
                            <img src={movie.Poster} className="card-img-top h-75 img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.Title}</h5>
                                <p className="card-text mb-2">Released : {movie.Year}</p>
                                <p >Type : {movie.Type}</p>
                                <p>
                                <a href='https://netflix.com' target='_blank' ><img src={Netflix} className='h-10 w-10' /></a>
                                <a href='https://www.primevideo.com' target='_blank' ><img src={Amazon} className='h-25 w-25' /></a>
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    
                ) : 
                <div></div>}
            
            </div>
        </>
    )
}