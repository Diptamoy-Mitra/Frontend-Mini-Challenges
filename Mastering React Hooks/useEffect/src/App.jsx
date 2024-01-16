
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  //syntax of useState Hook
  const [counter, setCounter] = useState(0)

  //built counter app
  function increment() {
    setCounter((prev) => prev + 1)
  }
  function decrement() {
    setCounter((prev) => prev - 1)
  }
  // useEffect(() => {

  // },)

  //case 1 -> no dependancy passed
  // useEffect(()=>{

  // },)

  //case 2 -> empty array passed
  // useEffect(() => {

  // },[])

  //case 3 -> state variables in dependancy array 
  // useEffect(() => {

  // },[])



  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${counter}`)
      .then(res => res.json())
      .then(json => console.log(json)) //Array(20)
  }, [counter])

  return (
    <>
      <div className="container">
        <button onClick={increment}>+</button>
        <h2>{counter}</h2>
        <button onClick={decrement}>-</button>
      </div>


    </>
  )
}

export default App
