import './App.css'
import Header from './components/header';
import './assets/Header.css'
import About from './components/About';
import './assets/About.css';
import Cards from './components/cards';
import './assets/Cards.css'

const App = () => {

  return (
    <div className="App">
            <Header />
            <About />
            <Cards />
      </div>
    
  )
}

export default App

