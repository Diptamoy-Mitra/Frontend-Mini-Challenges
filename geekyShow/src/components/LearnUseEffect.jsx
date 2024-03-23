import React, { useEffect, useState } from 'react'

function LearnUseEffect() {


    //useEffect is a hook that allows you to perform side effects in function components like data fetching, subscriptions, or manually changing the DOM from React components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.


    const [count, setCount] = useState(0);

    //increase count
    const handleCount = () => {
        setCount((prev) => prev + 1)
    }

    //state for random number
    const [randomNumber, setRandomNumber] = useState(null);

    const genarateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100)
        setRandomNumber(newRandomNumber)
    }

    //example-1 its runs each time when component is mounted and re-render

    //   useEffect(()=>{
    //     console.log('useeffect called 1')
    //   })


    //example-2 its runs only once when component is mounted 
    //   useEffect(()=>{
    //     console.log('useeffect called 2')
    //   },[]) //empty array means no dependency


    //example-3 its runs when count is changed
    // useEffect(() => {
    //     console.log('useeffect called 3')

    // }, [count]) //depends upon count state


    //example-4 - The cleanup function(the function you return from useEffect) runs when the component is unmounted or when the dependecies in the dependancy array change.Since count is in the dependency array, whenever count changes, he cleanup function is called before the new effect runs.

    useEffect(() => {
        console.log('useeffect called 4')
        return ()=>{
            console.log('cleanup function: component unmounted or count changed') 
        }

    }, [count])



    return (
        <div>

            <h1>Count: {count}</h1>
            <button onClick={handleCount}>Increase Count</button>

            <h2>Random no: {randomNumber}</h2>
            <button onClick={genarateRandomNumber}>Generate Random Number</button>


        </div>
    )
}

export default LearnUseEffect
