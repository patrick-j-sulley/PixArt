import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import CanvasSettingsPage from './CanvasSettingsPage';
import CanvasPage from './CanvasPage';

function App() {

  return (
    <>
      <div>
        <h1>PixArt is here</h1>
      </div>

      <Route exact path='/' component={CanvasSettingsPage} />
      <Route path='/canvas' component={CanvasPage} />
    </>
  )
}

export default App
