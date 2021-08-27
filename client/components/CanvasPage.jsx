import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import Pixel from './Pixel'
import { ReactDOM } from 'react';



function CanvasPage() {

  const [color, setColor] = useState("#aabbcc");

  const pixelSize = 20 // temp value in px
  let hexColor = '#0fa' // temp value

  const canvasWidth = 24
  const canvasHeight = 18

  // canvas style
  const canvasStyle = {
    width: canvasWidth * pixelSize,
    height: canvasHeight * pixelSize
  }

  // const [pixelColor, changeColor] = useState()

  const changeColor = (id) => {
    console.log(id)

    let pixel = document.getElementById(id)

    console.log(pixel)
    
    return color
   
    // console.log(pixel)
    // return canvas.forEach((pixel) => {
    //   pixel.backgroundColor = color
    //   console.log(canvas.backgroundColor)
    // }
    // )
  }

  const pixArr = []
  for (var i = 0; i < canvasWidth * canvasHeight; i++) { // temp 64 pix
    pixArr.push(i)
  }

  return (
    <>


      <div className='canvas' style={canvasStyle}>
        {

          pixArr.map(pix => {
            return (
              <Pixel id={pix} width={`${pixelSize}`} height={`${pixelSize}`} name='pixel' backgroundColor={`${hexColor}`} clickPixel={(evt) => changeColor(evt.target.id)} />
            )
          })
        }
      </div>
      <HexColorPicker className='colorpicker' color={color} onChange={setColor} />
    </>
  )
}

export default CanvasPage