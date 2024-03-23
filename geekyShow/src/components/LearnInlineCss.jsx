import React from 'react'

export default function LearnInlineCss() {

  const BtnStyle={
    color:'green',
    backgroundColor:'yellow',
    

  }
  return (
    <>

       <p style={{'fontSize': '20', 'color':'red'}}>
        Hello React + Vite + GeekyShowsa
       </p>
       <hr />
        <button style={BtnStyle}>Click Me</button>
        <hr />

        
        <button style={{...BtnStyle, ...{'fontSize':'40px'}}}>Click me combine</button>
      
    </>
  )
}
