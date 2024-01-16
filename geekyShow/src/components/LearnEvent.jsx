import React from 'react'

export default function LearnEvent() {

  function handleClick1(e){
    e.preventDefault();
    console.log("Button clicked 1")
  }

  function handleClick2(myID){
     console.log("button clickwd 2 ")
     console.log(myID)
  }

  return (
    <div>
      {/* Learn Events */}

       {/* without arguments */}
       <button onClick={handleClick1}>Click 1</button>
        {/* with arguments */}
        <button onClick={(e)=>handleClick2("MYID 123")}>Click 2</button>
    </div>
  )
}
