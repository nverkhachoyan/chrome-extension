import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {SettingsContextProvider, SettingsContext} from "./contexts/SettingsContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsContextProvider>
      <App SettingsContext={SettingsContext} />
    </SettingsContextProvider>
  </React.StrictMode>
)
