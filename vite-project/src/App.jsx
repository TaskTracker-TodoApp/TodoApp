import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { About } from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Router>
        <Nav />
        <Routes>
          <Route path='Home' element={<Home />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='About' element={<About />} />

        </Routes>
        <Footer />

      </Router>


    </div>


  )
}

export default App
