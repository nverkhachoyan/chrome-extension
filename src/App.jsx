import { useState, useContext } from "react";
import DailyTasks from "./components/DailyTasks";
import defaultBackground from './assets/default-background2.jpeg'
import Time from "./components/Time";
import DateComponent from './components/DateComponent'
import Settings from "./components/Settings";
import Weather from "./components/Weather"
import useUnsplashAPI from './wallpaperAPI'
import './App.css'

function App({SettingsContext}) {
  const {wallpaperData, setWallpaperData} = useUnsplashAPI(null)
  const [onShowSettings, setOnShowSettings] = useState(false)
  const {settings} = useContext(SettingsContext)
  const {
    enableDailyTasks, 
    enableTime, 
    enableDate, 
    enableWeather,
    ...rest} = settings


  return (
      <div 
      className="app" 
      id="app" 
      style={{ backgroundImage: `url(${wallpaperData ? wallpaperData.urls.regular : defaultBackground})`}}
      >

        {enableDate && <DateComponent isShown={!onShowSettings}  />}
        {enableWeather && <Weather isShown={!onShowSettings} />}

        {enableTime && <Time isShown={!onShowSettings}   />}
        {enableDailyTasks && <DailyTasks isShown={!onShowSettings} />}




        <div className="unsplash_credits">
          Photo by 
          <span> John Doe </span>
          on <a href="www.unsplash.com">Unsplash</a>
        </div>

        <Settings isShown={onShowSettings} />
        <div className="settings-icon" onClick={() => setOnShowSettings(!onShowSettings)}></div>
      </div>
 
    
  )
}

export default App
