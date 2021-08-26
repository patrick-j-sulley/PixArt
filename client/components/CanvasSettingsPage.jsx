import React from 'react'
import {Link} from 'react-router-dom'

const CanvasSettingsPage = () => {

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Box!!</label>
          <input name='name' type='text' />
          <Link to='/canvas'>
            <button>Start!</button>
          </Link>
      </form>
    </div>
  )
}

export default CanvasSettingsPage