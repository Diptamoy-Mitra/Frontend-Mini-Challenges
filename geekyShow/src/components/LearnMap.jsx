import React from 'react'

export default function LearnMap() {



  
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //array



  return (
    <div>
        <h1>Learn Map</h1>
        <ul>
            {arr.map((item, index) => (
            <li key={index}>{index}---- {item}</li>
            ))}
        </ul>
      
    </div>
  )
}
