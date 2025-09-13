import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/card1'

//import Image from "next/image";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card1 title="Hey Sup" buttontext="Click me"/>
      <Card1 title="All good bruh" buttontext="Click me"/>
      
    </>
  )
}

export default App
