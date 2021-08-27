import React, { useState } from 'react'

// 



const Pixel = (props) => {

  const randomColour = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  const getNewStyle = () => {
    return {
      width: props.width + 'px',
      height: props.height + 'px',
      backgroundColor: '#0fa'
    }
  }

  const [style, setStyle] = useState(getNewStyle())

  const changeColour = () => {
    setStyle(
      {
        ...style,
        backgroundColor: '#fa0'
      }
    )
  }

  // const newColor = () => {
  //   setPixelColor(props.clickPixel)
  // }

  // const changeColor = () => {
  //   console.log(props.changeColor)
  // }

  // const setPixelColor = {
  //     width : props.width + 'px',
  //     height : props.height + 'px',
  //     backgroundColor : props.backgroundColor
  // }

  return (
    <div id={props.id} name={props.name} style={style} onClick={changeColour}></div>

  )
}

export default Pixel