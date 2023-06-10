import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import './assets/Header.css'
import About from './components/About';
import './assets/About.css';
import Cards from './components/cards';
import './assets/Cards.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
            <Header />
            <About />
            <Cards />
      </div>
    
  )
}

export default App

