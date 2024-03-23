import React from 'react'

export default function CounterApp() {
  const [count, setCount] = React.useState(0)
   

  //increase counter
   const handleIncreaseCounter=()=>{
    //  setCount(count+1)
       setCount((prevCount)=>prevCount+1)
   }

   //decrease counter
    const handleDecreaseCounter=()=>{
        setCount((prevCount)=>prevCount-1)
    }

   //reset counter
    const resetCount=()=>{
      setCount(0)
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncreaseCounter}>Increase</button>
      <button onClick={handleDecreaseCounter}>Decrease</button>
      <button onClick={resetCount}>Reset Counter </button>

      
    </div>
  )
}
