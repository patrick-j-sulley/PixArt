import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import Pixel from './Pixel'
import { ReactDOM } from 'react';


var  canvas = document.getElementsByName('pixel')

function App() {

  const [color, setColor] = useState("#aabbcc");

  const pixelSize = 50 // temp value in px
  let hexColor = '#0fa' // temp value

  const canvasWidth = 8
  const canvasHeight = 8

  // canvas style
  const canvasStyle = {
    width : canvasWidth * pixelSize,
    height : canvasHeight * pixelSize
  }

  const changeColor = () => {
    // console.log(hexColor)
    console.log(color)
    console.log(canvas)
    // hexColor = color
    return canvas.forEach((pixel)=> pixel.backgroundColor = color)
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
      <HexColorPicker color={color} onChange={setColor} />

      <div className='canvas' style={canvasStyle} onClick={changeColor}>
        {
          
          pixArr.map(pix => {
            return (
              <Pixel id ={pix} width={`${pixelSize}`} height={`${pixelSize}`} name = 'pixel' backgroundColor={`${hexColor}`}  />
            )
          })
        }
      </div>
    </>
  )
}

export default App
