import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
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
import ToDo from './pages/ToDo'
import MovieList from './movieList'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Counter from './pages/counter'
import InputValue from './pages/inputValues'
import UseStateArray from './pages/useStateArray'
import DocTitle from './pages/useEffect'
import MouseContainer from './pages/mouseContainer'
import IntervalHookCounter from './pages/intervalHookCounter'
import DataFetching from './component/DataFetching'
import ParentComponent from './useCallbackComponent/parentComponent'
import FocusInput from './useRefComponent/FocusInput'
import DocTitleOne from './useCustomHooks/DocTitleOne'
import DocTitleTwo from './useCustomHooks/DocTitletwo'
import CounterOne from './useCustomHooks/counterOne'
import CounterTwo from './useCustomHooks/counterTwo'
import UserForm from './useCustomHooks/userForm'
import FetchMovieData from './MovieAPI/fetchMovieData'

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
const formData2 = { note: '' }
formData2.note = 'Hello';

  return (
    <BrowserRouter>
    <div>
        <Header /> 
        <div className ="container my-5">
          <div className ='row mt-5'>
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
            <Routes>
              <Route path = '/' element = {<Card />} exact />
              <Route path = '/todo' element = {<ToDo />} />
              <Route path = '/form' element = {<Form />} />
            </Routes>
            <div className='row d-flex justify-content-center text-center'>
              <h1 className='my-3'>Dice Game</h1>
              {diceElements}
              <button className='btn btn-primary w-25 my-3' onClick={rollDice}>Roll</button>
            </div>
            
            <ToDo />
            <div className='row'>
              <MovieList />
              {/* <input type='search' /> */}
            </div>
            <div className='row my-3'>
              <div className='col-lg-4'>
                 <Counter />
              </div>
              <div className='col-lg-4'>
                <InputValue />
              </div>
              <div className='col-lg-4'>
              <UseStateArray />
              </div>
            </div>
            <div className='row my-3' >
              <div className='col-lg-4'>
                <DocTitle />
              </div>
              <div className='col-lg-4'>
                <MouseContainer />
              </div>
              <div className='col-lg-4'>
                <IntervalHookCounter />
              </div>
            </div>
            <div className='row my-3'>
              <div className='col-lg-8'>
                <DataFetching />
              </div>
            </div>
            <div className='row my-3'>
              <div className='col-lg-3'>
                <ParentComponent />
              </div>
              <div className='col-lg-3'>
                <h1>useRef </h1>
                <FocusInput />
              </div>
              <div className='col-lg-4'>
                <h1>useCustomHooks</h1>
                <DocTitleOne />
                <DocTitleTwo />
                <CounterOne />
                <CounterTwo />
                <UserForm />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <FetchMovieData />
              </div>
            </div>
            
          </div>
        </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
