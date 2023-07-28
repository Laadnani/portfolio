import { Navigation } from './components/Navigation'
import { Front } from './components/Front'
import { Cardwheel } from './components/Cardwheel'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Portfolio } from './myweb'
import { EcomTemplate } from './ecomweb/ecomfront'
import './App.css'



function App() {

  return (
    <> 
    <Routes> 
      <Route path='/' element={<Portfolio />} />
      <Route path='ecom-temp' element={<EcomTemplate />} />
    </Routes>
    </>
  )
}

export default App
