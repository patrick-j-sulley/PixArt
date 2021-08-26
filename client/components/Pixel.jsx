import React, { useState } from 'react'

const Pixel = (props) => {
  const pixelProperties = {
      width : props.width + 'px',
      height : props.height + 'px',
      backgroundColor : props.backgroundColor
  }

  return (
    <div style={pixelProperties}></div>
  )
}

export default Pixel
