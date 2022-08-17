import { useState } from "react";
import DailyTasks from "./components/DailyTasks";
import defaultBackground from './assets/default-background.jpeg'
import Time from "./components/Time";
import DateComponent from './components/DateComponent'
import Settings from "./components/Settings";
import './App.css'

function App() {
  const [onShowSettings, setOnShowSettings] = useState(false)

  return (
    <div className="app" id="app" style={{ backgroundImage: `url(${defaultBackground})`}}>

        <DateComponent isShown={!onShowSettings}  />
        <Time isShown={!onShowSettings}   />
        <DailyTasks isShown={!onShowSettings} />
        <Settings isShown={onShowSettings} />

      
       <div className="settings-icon" onClick={() => setOnShowSettings(!onShowSettings)}></div>
    </div>
  )
}

export default App
