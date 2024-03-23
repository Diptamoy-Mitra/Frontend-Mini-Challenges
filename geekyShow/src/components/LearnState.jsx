import React, { useState } from 'react'

function LearnState() {
  const [num, setNum]=useState(0)
  console.log(num);

  function handleNum(){
    setNum(9)
  }

  //another example
  const [position, setPosition] =useState({x:1,y:2})
  console.log("Position: ", position) //Position:  {x: 1, y: 2}
  function changePos(){
    setPosition({x:99, y:88})
  }
  return (
    <div>
      <h1>Number: {num}</h1>
      <button onClick={handleNum}>Change number</button>
      <h1>Position: {position.x} | {position.y}</h1>
      <button onClick={changePos}>Change position clicked</button>
    </div>
  )
}

export default LearnState
