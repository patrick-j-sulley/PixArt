import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Pixel from "./Pixel";

function App() {
  const [color, setColor] = useState("#aabbcc");

  const pixelSize = 50; // temp value in px
  const hexColor = "#0fa"; // temp value

  const canvasWidth = 8;
  const canvasHeight = 8;

  // canvas style
  const canvasStyle = {
    width: canvasWidth * pixelSize,
    height: canvasHeight * pixelSize,
  };

  const pixArr = [];
  for (var i = 0; i < canvasWidth * canvasHeight; i++) {
    // temp 64 pix
    pixArr.push(null);
  }

  return (
    <>
      <div>
        <h1>PixArt is here</h1>
      </div>

      <div className="canvas" style={canvasStyle}>
        {pixArr.map((pix) => {
          return (
            <Pixel
              width={`${pixelSize}`}
              height={`${pixelSize}`}
              backgroundColor={`${hexColor}`}
            />
          );
        })}
      </div>

      <HexColorPicker className="colorpicker" color={color} onChange={setColor} />
    </>
  );
}

export default App;
