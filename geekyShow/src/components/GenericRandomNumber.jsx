import React, { memo } from 'react'

export const GenericRandomNumber = memo(({ randomNumber, generateRandomNumber }) => {
    console.log("Generate random number component rerendered")


    //memo is ahigher order component used to avoid unnecessary re render of the component, it will re render only if the props are changed

    //got to now LearnUseCallback.jsx
    return (
        <div>
            <h2>Random Number:{randomNumber}</h2>
            <button onClick={generateRandomNumber}>Generate Random Number(child)</button>

        </div>
    )
}) 