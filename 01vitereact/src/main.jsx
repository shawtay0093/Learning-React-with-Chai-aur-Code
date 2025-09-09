import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom app made by Swati</h1>
      <p1>I am learning basics of react and i can call this function directly in this main.js file... instead of having a function in app.js file. its just another simple way of how react works.</p1>
      <p2>Now since it is a function, it can be called like MyApp() without having <> like jsx form, it will still work.</></p2>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <MyApp /> 
    /* MyApp() */
  </StrictMode>,
)
