import React from 'react'
import { useCounterHook } from '../hooks/useCustomCounter';


function LearnCustomHooks() {



    //destructure the custom hooks
   const {count,increaseCount,decreaseCount}=useCounterHook()

    
    return (
        <div>
            <h2>Learn Custom Hooks</h2>

            <h1>Count: {count}</h1>

            <button onClick={increaseCount}>Increase Counter(Button)</button>
            <hr />
            <button onClick={decreaseCount}>Decrease Counter(Button)</button>
        </div>
    )
}

export default LearnCustomHooks
