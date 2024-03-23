import React from 'react'

function LearnUsingENV() {
    return (
        <>
            <h1 className='bg-red-600 text-white'>how use env in react + vite</h1>
            {
                import.meta.env.VITE_BASE_API_URL
            }
            <br />
            {
                import.meta.env.VITE_API_KEY
            }
        </>
    )
}

export default LearnUsingENV
