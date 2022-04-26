import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Card from './card';
import Joke from './joke';
import jokeData from './jokeData'
import data from './data'
import CardData from './cardData'
import Travel from './travel'
import EventListener from './eventListener'
import Body from './body'
import Head from './head'
import BoxesData from './boxesData'
import Box from './box'
import Form from './form'
import Signup from './signup'
import UseEffect from './useEffect'
import WindowTracker from './windowTracker'
import DarkTheme from './darkTheme'
import Dice from './dice'
// import { nanoid } from 'nanoid'
import ToDo from './ToDo'

function App() {

  const [box,setBox] = React.useState(BoxesData)

  const square = box.map((boxes)=>{
    return (
        <Box key = {boxes.id} on ={boxes.on} />
    )
  })

  const jokeElements = jokeData.map(joke =>{
    return <Joke  setup = {joke.setup} punchline = {joke.punchline} />
  })

  const dataElements = data.map(data =>{
    return (
          <CardData 
            id = {data.id}  data = {data}
            // title = {data.title} 
            // rating = {data.stats.rating} 
            // reviewPoint = {data.stats.reviewCount}
            // img = {data.coverImg}
            // openSports = {data.openSports}
            // price = {data.price}
            // location = {data.location}
          />
      )
  })

  const [user,setUser] = React.useState('Ratheesh') //passing data to the components
  
  const [dice,setdice] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = []
    for(let i = 0; i < 12; i++){
        newDice.push({
          value :Math.trunc(Math.random() * 6),
          isHeld: true,
          // id: nanoid(),
        })
    }
    // console.log(newDice)
    return newDice
}
function holdDice(id){
  console.log(id)
}
const diceElements = dice.map((dice) =>{
  return <Dice id={dice.id} value={dice.value} isHeld = {dice.isHeld} holdDice={()=> holdDice(dice.id)} />
})

function rollDice(){
  setdice(allNewDice())
}

// TO DO list

const [formData,setFormData] = React.useState({
  note: '',
})

const [inputValue,setInputValue] = React.useState([])

function handleOnChange(event){
  const {name,value} = event.target
  setFormData((prevFormData) =>{
      return {...prevFormData,[name]: value}
  })
}
console.log({formData})

function handleClick(){
  setInputValue((prevInputValue) =>{
      return [...prevInputValue,formData.note]
  })
  setFormData({note:''})
}
console.log(inputValue)

  return (
    <div>
        <Header /> 
        <div className ="container my-5">
          <div className ='row'>
            <Card 
              img = "https://picsum.photos/id/237/300/300"
              title = "card 1 Title"
              phone = {9082552}
              email = 'xyz@mail.com'
            />
            <Card 
              img = "https://picsum.photos/id/112/300/300"
              title = "card 2 Title"
              phone = {74322}
              email = '123@mail.com'
            />
            <Card 
              img = "https://picsum.photos/id/239/300/300"
              title = "card 3 Title"
              phone = {8432234}
              email = 'tyu@mail.com'
            />
            <Card 
              img = "https://picsum.photos/id/238/300/300"
              title = "card 4 Title"
            phone =  {95222000}
              email = 'bbb@mail.com'
            />
            {jokeElements}
            {dataElements}
            <Travel />
            <EventListener />
            <Head name = {user} />
            <Body name = {user} />
            {square}
            <Form />
            <Signup />
            <UseEffect />
            <WindowTracker />
            <DarkTheme />
            <div className='row d-flex justify-content-center text-center'>
              <h1 className='my-3'>Dice Game</h1>
              {diceElements}
              <button className='btn btn-primary w-25 my-3' onClick={rollDice}>Roll</button>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <input className='border-0 p-2 bg-secondary bg-gradient my-3'
                  onChange={handleOnChange} 
                  type = 'text' 
                  placeholder ='Enter Notes'
                  name = 'note'
                  value = {formData.note}
                  />
                <button className='px-3 py-2 border' onClick={handleClick}>+</button>
                <ToDo value={inputValue} setInputValue={setInputValue} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
