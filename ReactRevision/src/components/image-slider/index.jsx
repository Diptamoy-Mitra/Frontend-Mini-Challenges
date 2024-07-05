import React, { useEffect, useState } from 'react'

export default function ImageSlider({ url, limit }) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)


    //for fetching images 
    async function fetchImages(url) {
        setLoading(true)
        try {

            const res = await fetch(`${url}?page=1&limit=${limit}`);
            const data = await res.json();
            if (data) {
                setImages(data)
                setLoading(false)
            }

        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    //api fetch when load the page
    useEffect(() => {
        if (url !== "") {
            fetchImages(url)
        }
    }, [url])


    console.log(images)

    //if loading
    if(loading){
        return <div>Loading Data!!</div>
    }

    //if error comes
    if(errorMsg!==null){
        return <div>Error occured! {errorMsg}</div>
    }


    return (
        <div className='container'>

        </div>
    )
}
