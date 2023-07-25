import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Front } from './components/Front'
import { Cardwheel } from './components/Cardwheel'
import { Footer } from './components/Footer'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation /> 
    <Front />
    <Cardwheel />
    <Footer />
    </>
  )
}

export default App
