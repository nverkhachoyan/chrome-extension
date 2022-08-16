import {useState, useEffect} from 'react'

function Time() {
  const [date, setDate] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  },[])

  return (
    <div className="time">
        <h1>{`${date.getHours()}:${date.getMinutes()}`}</h1>
    </div>
  )
}

export default Time