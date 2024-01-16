import React from 'react'

export default function LearnProps(props) {
  return (
    <>
     {/* data pass from parent to child components, its read only */}
    
    <h1>All props</h1>
      <h1>{props.name}</h1>
      <h1>{props.roll}</h1>
    </>
  )
}
