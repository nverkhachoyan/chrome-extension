import React from 'react'

import './Settings.css'

function Settings({isShown}) {
  return (
    <div 
      className="settings" 
      style={{
        opacity: isShown ? 1 : 0,
        display: !isShown && 'none'
      }}>
        <h1 className="settings-headline">Settings</h1>
        <div className="settings-container">
          <h3 className='setting'>Daily Tasks: <strong>show</strong></h3>
          <h3 className='setting'>Time: <strong>hidden</strong></h3>
          <h3 className='setting'>Date: <strong>show</strong></h3>
          <h3 className='setting'>Weather: <strong>hidden</strong></h3>
          <h3 className='setting'>Backgrounds: <strong>cats</strong></h3>
          <h3 className='setting'>Color pallete: <strong>#333</strong></h3>
        </div>
      </div>
  )
}

export default Settings