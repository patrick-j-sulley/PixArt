import React, {useState} from 'react';
import { HexColorPicker } from "react-colorful";

function App () {
  
    const [color, setColor] = useState("#aabbcc");

  return (
    <>
    <div>
      <h1>PixArt is here</h1>
    </div>
    <HexColorPicker color={color} onChange={setColor} />;
    </>
  )
}

export default App
