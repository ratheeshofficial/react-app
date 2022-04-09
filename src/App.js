import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Card from './card';
import Joke from './joke';
import jokeData from './jokeData'
import data from './data'
import CardData from './cardData'
import Travel from './travel'

function App() {

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
          </div>
        </div>
    </div>
  );
}

export default App;
