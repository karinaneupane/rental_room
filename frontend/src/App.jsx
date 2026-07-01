import { useState } from 'react'
import Navbar from './Components/layout/Navbar.jsx'
import Homepage from './Pages/Homepage.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
    </>
  )
}

export default App
