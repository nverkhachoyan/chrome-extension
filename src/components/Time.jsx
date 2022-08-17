import {useState, useEffect} from 'react'
import './Time.css'

function Time({isShown}) {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  },[])

  function getHoursInTwelve() {
    const currentHour = date.getHours()
    if(currentHour > 12) {
      return currentHour - 12
    } else {
      return currentHour
    }
  }

  return (
    <div 
    className="time"
    style={{
      transition: '0.3s ease-in-out',
      opacity: isShown ? 1 : 0
    }}
    >
        <h1>{`${getHoursInTwelve()}:${date.getMinutes()}`}</h1>
    </div>
  )
}

export default Time