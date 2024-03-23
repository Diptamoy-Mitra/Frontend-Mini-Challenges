import React, { useState } from 'react'



export const useCounterHook = () => {

    const [count, setCount] = useState(0)

    function increaseCount(){
        setCount(prev=>prev+1)
    }
    function decreaseCount(){
        setCount(prev=>prev-1)
    }


   return {count, increaseCount, decreaseCount}

  
}



