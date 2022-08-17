import { useState, useEffect } from "react";
import DailyTasks from "./components/DailyTasks";
import defaultBackground from './assets/default-background2.jpeg'
import Time from "./components/Time";
import DateComponent from './components/DateComponent'
import Settings from "./components/Settings";
import './App.css'

function App() {
  const [onShowSettings, setOnShowSettings] = useState(false)

  // useEffect(() => {
  //   fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=e74051f5395c3def84625543fee11546")
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  // }, []);

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
