import React, { useState } from 'react'

const Pixel = (props) => {
  const pixelProperties = {
      // name : 'pixel',
      width : props.width + 'px',
      height : props.height + 'px',
      backgroundColor : props.backgroundColor
  }

  return (
    <div id={props.id} name = {props.name} style={pixelProperties}></div>
  )
}

export default Pixel
