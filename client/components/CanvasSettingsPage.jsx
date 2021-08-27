import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const CanvasSettingsPage = () => {

  const [settingsData, setSettingsData] = useState(
    {
      canvasWidth: '',
      canvasHeight: '',
      pixelSize: ''
    }    
  )

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // setSettingsData(
    //   {
    //     ...settingsData
    //   }
    // )
    console.log(settingsData)
    
  }

  const handleChange = (evt) => {
    setSettingsData(
      {
        ...settingsData,
        [evt.target.name]: evt.target.value
      }
    )
    // console.log(settingsData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='canvasWIdth'>Canvas Width</label>
          <input name='canvasWidth' value={settingsData.width} onChange={handleChange} type='text' />
        </div>
        <div>
          <label htmlFor='canvasHeight'>Canvas Height</label>
          <input name='canvasHeight' value={settingsData.height} onChange={handleChange} type='text' />
        </div>
        <div>
          <label htmlFor='pixelSize'>Pixel Size (px)</label>
          <input name='pixelSize' value={settingsData.pixelSize} onChange={handleChange} type='text' />
        </div>

        {/* <Link to='/canvas'> */}
          <button>Start!</button>
        {/* </Link> */}
      </form>
    </div>
  )
}

export default CanvasSettingsPage