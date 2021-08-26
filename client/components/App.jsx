import React, { useState } from 'react';
import { HexColorPicker } from "react-colorful";
import Pixel from './Pixel'

function App() {

  const [color, setColor] = useState("#aabbcc");

  const pixelSize = 50 // temp value in px
  const hexColor = '#0fa' // temp value

  const pixArr = []
  for (var i = 0; i < 64; i++) { // temp 64 pix
    pixArr.push(null)
  }

  return (
    <>
      <div>
        <h1>PixArt is here</h1>
      </div>
      <HexColorPicker color={color} onChange={setColor} />

      {
        pixArr.map(pix => {
          return (
            <Pixel width={`${pixelSize}`} height={`${pixelSize}`} backgroundColor={`${hexColor}`} />
          )
        })
      }
    </>
  )
}

export default App
