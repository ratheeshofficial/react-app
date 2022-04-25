import React from 'react'
import memesData from './memesData'
import star1 from './img/star1.png'
import star2 from './img/star2.png'



export default function EventListener(){
    const [isImportant,setIsImportant] = React.useState('yes')  // State is a array

    const [count,setCount] = React.useState(0)

    const [memeImage,setMemeImage] = React.useState('')

    // const isGoingOut = true
    // let answer = isGoingOut === true ? 'yes' : 'no'
    
    const [isGoingOut,setisGoingOut] = React.useState(true)

    const [thingsArray,setThingsArray] = React.useState(['Thing 1','Thing 2'])

    function handleClick(){
        setIsImportant('No')
    }

    function handleMinus(){
        // setCount(count - 1)
        setCount((prevCount) => {
          return  prevCount - 1
        })
    }

    function handlePlus(){
        setCount(prevCount => prevCount + 1)
        // setCount(count + 1)
    }

    const [meme,setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages,setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
       
        
        const memsArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memsArray.length)
        const imgUrl = memsArray[randomNumber].url
        
        setMeme((prevMeme => ({
            ...prevMeme,
            randomImage: imgUrl
        })))
        console.log(imgUrl)

    }
    function handleChange(event){
        const {name,value} = event.target
        setMeme((prevMeme) =>{
            return {...prevMeme,[name]:value}
        })
    }

    function changeisGoingOut(){
        setisGoingOut(isGoingOut === true ? false : true)
        // setisGoingOut(!isGoingOut) // This is relavant to above line 
        
    }
    function addItem(){
        setThingsArray((prevThingsArray)=>{
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }

    const thingElements = thingsArray.map((things)=>{
        return <p>{`${things}`}</p>
    })

    const [addItemArray,setAddItemArray] = React.useState([])

    function addOne(){
        setAddItemArray((prevAddItem)=>{
            return [...prevAddItem,`Item ${addItemArray.length + 1}` ]
        })
    }

    const item = addItemArray.map((itemValues)=>{
        return <p>{`${itemValues}`}</p>
    })

    const [contact,setContact] = React.useState({
        firstName : 'John',
        lastName : 'Doe',
        phone: 98765434567,
        email: 'xyz@gmail.com',
        isFavorite : true,
    })

    const handleFavourites = () =>{
        setContact((prevContact) => ({...prevContact,isFavorite:!prevContact.isFavorite}))
    }

    

    return(
        <>  
            <div className ='col-lg-3'>
                <hr />
                <button className='btn btn-success' onClick = {handleClick}>Click Me</button>
                
                <div className='mt-2'>
                    <h5>{isImportant}</h5>
                </div>
                <div className='d-flex'>
                    <button onClick={handleMinus} className='btn btn-light'>-</button>
                        <h5 className='px-2 mt-2'>{count}</h5>
                    <button onClick={handlePlus} className='btn btn-light'>+</button>
                </div>
            </div>

            <div className ='col-lg-3'>
                <hr />
                <input type='text' name='topText' onChange={handleChange} value={meme.topText} className='form-control mb-3 ' placeholder='Top Text' />
                <input type='text' name='bottomText' onChange={handleChange} value={meme.bottomText} className='form-control mb-3 ' placeholder='Bottom Text' />
                <button className = 'btn btn-primary' onClick = {getMemeImage}>Meme Image</button>
                <div className='mt-2'>
                     <img src={meme.randomImage} style={{width: '80%'}} />
                     <h2>{meme.topText}</h2>
                     <h2>{meme.bottomText}</h2>
                </div>
                {/* {isGoingOut === true ? 'yes' : 'no'} */}
                
            </div>
            <div className ='col-lg-3'>
                
                <hr />
                <div onClick={changeisGoingOut}>
                    <h4>{isGoingOut === true ? 'Yes' : 'No'}</h4>
                </div>
                <div>
                    <button className='btn btn-outline-secondary' onClick={addItem}>
                        Add Item
                    </button>
                    <div>{thingElements}</div>
                </div>
            </div>
            <div className ='col-lg-3'>
                <div>
                    <hr />
                    <h4>Adding Item </h4>
                    <button className='btn btn-outline-primary' onClick={addOne}>
                        Add Item
                    </button>
                    <p>{item}</p>
                </div>
            </div>
            <div className="row my-5">
                <div className ='col-lg-3'>
                    <div className="card text-dark bg-light mb-3 w-100" >
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <img src={contact.isFavorite ? star1 : star2} onClick={handleFavourites} className='w-25' />
                            <h5 className="card-title">{contact.firstName} {contact.lastName}</h5>
                            <p>{contact.phone}</p>
                            <p className="card-text">{contact.email}</p>
                            
                        </div>
                    </div>
                </div>
                <div className ='col-lg-3'>
                    
                </div>
            </div>
        </>
    )
}