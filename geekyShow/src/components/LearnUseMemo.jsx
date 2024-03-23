import React, { useState, useMemo } from 'react'

export default function LearnUseMemo() {



    //state for count
    const [count, setCount] = useState(0);

    //increase count
    const handleCount = () => {
        console.log('Increase count called')
        setCount((prev) => prev + 1)
    }

    //state for random number
    const [randomNumber, setRandomNumber] = useState(null);

    //random no generator
    const genarateRandomNumber = () => {
        console.log('Generate random number called')
        const newRandomNumber = Math.floor(Math.random() * 100)
        setRandomNumber(newRandomNumber)
    }

    //without useMemo
    // const isCountTen=()=>{
    //     console.log('isCountTen Called')
    //     if(count===10){
    //         return "Yes"
    //     }
    //     return "No"
    // }

    //with useMemo
    const isCountTen = React.useMemo(() => {
        console.log('isCountTen Called') //this will not be called if count is not changed
        if (count === 10) {
            return "Yes"
        }
        return "No"
    }, [count]) 

    return (

        // here we cache  unnecessary computations and show results only when needed from cache, it reduce unnecessary re render, increase performance


        <div>

            <h1>Learn UseMemo</h1>
            <hr />
            {/* <h2>is {count} equal to 10? --- {isCountTen()}</h2> */}
            <h2>is {count} equal to 10? --- {isCountTen}</h2>
            <button onClick={handleCount}>Increase</button>
            <hr />
            <h2>Random Number: {randomNumber}</h2>
            <button onClick={genarateRandomNumber}>Generate Random Number</button>



        </div>
    )
}
