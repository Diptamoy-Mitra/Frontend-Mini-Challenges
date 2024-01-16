import { useState,useEffect } from 'react'
import './App.css'

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


  //fetch data
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err))
  }, [])




  return (
    <>
      <div className="container">
        <button onClick={increment}>+</button>
        <h2>{counter}</h2>
        <button onClick={decrement}>-</button>
      </div>


{/* data show */}
      <div className=''>
        <ul>
          {records.map((list, index) => (
            <li key={index}>{list.id} | {list.name}</li>

          ))}
        </ul>

      </div>
    </>
  )
}

export default App
