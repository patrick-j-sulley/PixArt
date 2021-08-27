import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import Pixel from './Pixel'
import { ReactDOM } from 'react';



function CanvasPage() {

  const [color, setColor] = useState("#aabbcc");

  const pixelSize = 50 // temp value in px
  let hexColor = '#0fa' // temp value

  const canvasWidth = 8
  const canvasHeight = 8

  // canvas style
  const canvasStyle = {
    width: canvasWidth * pixelSize,
    height: canvasHeight * pixelSize
  }

  const changeColor = () => {
    console.log('pixel')

    // pixel = document.getElementById(id)

    // console.log(hexColor)
    
    // hexColor = color
   
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

      <div>
        <h1>PixArt is here</h1>
      </div>


      <div className='canvas' style={canvasStyle}>
        {

          pixArr.map(pix => {
            return (
              <Pixel id={pix} width={`${pixelSize}`} height={`${pixelSize}`} name='pixel' backgroundColor={`${hexColor}`} changeColor={changeColor} />
            )
          })
        }
      </div>
      <HexColorPicker className='colorpicker' color={color} onChange={setColor} />
    </>
  )
}

export default CanvasPage
