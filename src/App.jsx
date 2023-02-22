// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import katiezaferes from "./assets/katiezaferes.svg"
import star from "./assets/star.svg"
import data from "./airbnbData.json"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        <Card
          image={katiezaferes}
          title="Life Lessons with Katieafere"
          star={star}
          rating="5.0"
          reviewCount={6}
          country="USA"
          price={136}
        />
        {data && data.map((item) => {
          return (
            <Card
              key={item.id} // Make sure to include a unique key for each card
              {...item}
              // image={item.image}
              // title={item.title}
              // star={star}
              // rating={item.rating}
              // reviewCount={item.reviewCount}
              // country={item.country}
              // price={item.price}
            />
          );
        })}
      </section>


      {/* {  data && data.map((item, idx )=> {
          return (
            <Card 
              key={idx}
              image={ item.image }
              title={ item.title}
              star={star}
              rating={ item.rating }
              reviewCount={ item.reviewCount }
              country={ item.country }
              price={item.price}
            />
          )
        }
      } */}

    </div>
  )
}

export default App
