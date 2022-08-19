import {useState, useEffect, useReducer, useContext } from 'react'
import {SettingsContext} from '../contexts/SettingsContext';

import './Settings.css'

function Settings({isShown}) {
  const {settings, dispatch, actions} = useContext(SettingsContext)
  const {enableDailyTasks, enableTime, enableDate, enableWeather, ...rest} = settings

  return (
    <div 
      className="settings" 
      style={{
        opacity: isShown ? 1 : 0,
        display: !isShown && 'none'
      }}>
        <h1 className="settings-headline">Settings</h1>
        <div className="settings-container">
          <div className="setting">
            <h3>Daily Tasks:</h3>
            <strong 
            className='setting-button' 
            onClick={() => dispatch(actions.toggleDailyTasks())}
            >
              {enableDailyTasks ? 'enabled' : 'disabled'}
            </strong>
          </div>

          <div className="setting">
            <h3>Time:</h3>
            <strong 
            className='setting-button' 
            onClick={() => dispatch(actions.toggleTime())}
            >
              {enableTime ? 'enabled' : 'disabled'}
            </strong>
          </div>
          
          <div className="setting">
            <h3>Date:</h3>
            <strong 
            className='setting-button' 
            onClick={() => dispatch(actions.toggleDate())}
            >
              {enableDate ? 'enabled' : 'disabled'}
            </strong>
          </div>

          <div className="setting">
            <h3>Weather:</h3>
            <strong 
            className='setting-button' 
            onClick={() => dispatch(actions.toggleWeather())}
            >
              {enableWeather ? 'enabled' : 'disabled'}
            </strong>
          </div>

          <h3 className='setting'>Backgrounds: <strong className='setting-button'>cats</strong></h3>
          <h3 className='setting'>Color pallete: <strong className='setting-button'>#333</strong></h3>
        </div>
      </div>
  )
}

export default Settings