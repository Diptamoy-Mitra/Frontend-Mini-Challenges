import React from 'react'

export default function LearnLiftingStateUp(props) {

  
  function handleClick3(e){
    e.preventDefault();
    let data="I am a child dataI am a child data"
    props.myClick(data) //its pass data to parent from child
  }
  return ( 
    <div>
      {/* child to parent data pass */}  

      <button onClick={handleClick3}>Click 3</button> 
    </div>
  )
}
