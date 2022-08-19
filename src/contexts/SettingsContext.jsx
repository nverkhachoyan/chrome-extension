import React, {createContext, useReducer} from 'react'

const SettingsContext = createContext()

const initialValue = {
  enableDailyTasks: true,
  enableTime: true,
  enableDate: true,
  enableWeather: true,
  backgrounds: ['cats'],
  colorPallete: '#333'
}

const toggleDailyTasks = () => {
  return {
    type: 'TOGGLE_DAILY_TASKS'
  }
}

const toggleTime = () => {
  return {
    type: 'TOGGLE_TIME'
  }
}

const toggleDate = () => {
  return {
    type: 'TOGGLE_DATE'
  }
}

const toggleWeather = () => {
  return {
    type: 'TOGGLE_WEATHER'
  }
}


const actions = {
  toggleDailyTasks,
  toggleTime,
  toggleDate,
  toggleWeather
}


function reducer(state, action) {
  switch(action.type){
      case 'TOGGLE_DAILY_TASKS':
        return {
          ...state,
          enableDailyTasks: !state.enableDailyTasks
        }
      case 'TOGGLE_TIME':
        return {
          ...state,
          enableTime: !state.enableTime
        }
      case 'TOGGLE_DATE':
        return {
          ...state, 
          enableDate: !state.enableDate
        }
      case 'TOGGLE_WEATHER':
        return {
          ...state, 
          enableWeather: !state.enableWeather
        }
      default:
          return state
  }
}

// use Settings Context Provider
function SettingsContextProvider({children}) {
  const [settings, dispatch] = useReducer(reducer, initialValue)
  
  return (
    <SettingsContext.Provider value={{settings, dispatch, actions}}>
        {children}
    </SettingsContext.Provider>
  )
}

export {SettingsContextProvider, SettingsContext}



