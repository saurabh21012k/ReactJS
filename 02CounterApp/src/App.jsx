import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

  
  const addValue = () =>{    
   if(counter<20){
    counter = counter + 1 
    setCounter(counter)
    console.log("Value added", counter)
   }
  }

  const minusValue = () =>{
    if(counter>0){
      counter = counter - 1 
    setCounter(counter)
    console.log("Value minused", counter)
    }
  }


  return (
    <>
    <h1>Saurabh Jadhav</h1>
    <h2>Counter Value : {counter} </h2>

    <button onClick={addValue}> Add </button>
    <br/>
    <br/>
    <button onClick={minusValue}> Remove </button>
  
    </>
  )
}

export default App
