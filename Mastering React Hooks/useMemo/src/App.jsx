import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
   const [number,setNumber]=useState(1)
   const [value,setValue]=useState(0);

  //  const factorial=calculateFactorial(number);
  const factorial=useMemo(()=>calculateFactorial(number),[number])

   function onChange(e){
      setNumber(Number(e.target.value))
   }

   function onClick(){
    setValue((i)=>i+1);
   }

   function calculateFactorial(n){
    console.log("factorial called")
    return n<=0?1:n*calculateFactorial(n-1);
   }


  return (
    <>
    <div className="container">
      <div>
        Factorial of 
        <input type="number" name="" id="" value={number} onChange={onChange}/>
        is {factorial}
        <button onClick={onClick}>Re-render</button>
      </div>
    </div>
      
    </>
  )
}

export default App
