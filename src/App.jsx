import { useEffect, useState } from "react";
import DailyTasks from "./components/DailyTasks";
import defaultBackground from './assets/default-background.jpeg'
import Time from "./components/Time";
import './App.css'

function App() {
  return (
    <div className="app" id="app" style={{
      backgroundImage: `url(${defaultBackground})`
    }}>
       <div className="date">
        {new Date().toDateString()}
        </div>
       <Time />
       <DailyTasks />
    </div>
  )
}

export default App
