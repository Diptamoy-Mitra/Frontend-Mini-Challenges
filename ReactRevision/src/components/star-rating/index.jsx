import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
export default function StarRating({ noOfStars = 8 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex)

        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex) 
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex) 
        setHover(rating) //when leave then upto rating will be select

    }
    return (
        <div className='star-rating flex justify-center items-center gap-3 text-[80px]'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'text-yellow-300' : 'text-black'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}

                    />
                })
            }
        </div>
    )
}
