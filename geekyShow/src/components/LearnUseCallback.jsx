import React, { useCallback, useEffect, useState } from 'react'
//this is child component
import { GenericRandomNumber } from './GenericRandomNumber'


//this is parent component
function LearnUseCallback() {
  //useCallback is used to cache the function or memorize whole function, it will not be re created if the dependency is not changed, its used to optimize the performance. its use when we pass the function as a prop to child component, so that the child component will not re render if the parent component re render.unnecesary child re render will be avoided.


  //goto  GenericRandomNumber.jsx

  const [count, setCount] = useState(0)


  //increase counter
  function handleIncreaseCount() {
    setCount((prev) => prev + 1)
  }


  //state for random number
  const [randomNumber, setRandomNumber] = useState(0)


  //generate random number (we see when i icrese parent component, automatically called chiled component unneccessarily, so we use useCallback to avoid this unneccessary re render of child component)
  // function generateRandomNumber() {
  //   setRandomNumber(Math.floor(Math.random()*100));
  // }

  //use useCallback
   const generateRandomNumber=useCallback(()=>{
    setRandomNumber(Math.floor(Math.random()*100));
  },[randomNumber]) //if the random number is changed then only the function will be re created, otherwise it will not be re created
  return (
    <div>
      <h2>Learn useCallback</h2>

  {/* call the GenericRandomNumber component and pass the props */}
      <GenericRandomNumber
        randomNumber={randomNumber}
        generateRandomNumber={generateRandomNumber}

      />

      {/* show result */}
      <h3>Count:{count}</h3>
      <button  onClick={handleIncreaseCount}>Increase Count(parent)</button>

    </div>


  )
}

export default LearnUseCallback
