/* eslint-disable no-unused-vars */
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from  './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <Home></Home>
     
    </>
  )
}

export default App
