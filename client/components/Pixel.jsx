import React, { useState } from 'react'


const Pixel = (props) => {

  // const changeColor = () => {
  //   console.log(props.changeColor)
  // }

  const pixelProperties = {
      // name : 'pixel',
      width : props.width + 'px',
      height : props.height + 'px',
      backgroundColor : props.backgroundColor
  }

  return (
    <div id={props.id} name = {props.name} style={pixelProperties} onClick={props.changeColor}></div>
  )
}

export default Pixel
