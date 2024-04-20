
import React, { useEffect, useState } from 'react'

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')


    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }

    //handle random color hex
    function handleCreateRandomHexColor(){
        const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor="#"
        for(let i=0;i<6;i++){
            hexColor+=hex[randomColorUtility(hex.length)]
            console.log(hexColor,"process")
        }
        // console.log(hexColor)

        setColor(hexColor)
    } 
    //rgb
    function handleCreateRandomRgbColor(){
        const r=randomColorUtility(256)
        const g=randomColorUtility(256)
        const b=randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(()=>{
        if(typeOfColor==='hex'){
            handleCreateRandomHexColor()
        }
        else{
            handleCreateRandomRgbColor()
        }
    },[typeOfColor])


    return (
        <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
          
        }}
        className='gap-2'
      >
        <button className='text-white border-2 border-red-800 p-2' onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button className='text-white border-2 border-red-800 p-2' onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className='text-white border-2 border-red-800 p-2'
        >
          Generate Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "30px",
            marginTop: "40px",
            flexDirection  :'column',
            gap :'20px'
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    )
}

export default RandomColor
