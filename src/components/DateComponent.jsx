import {useEffect, useState} from 'react'
import './Date.css'

function DateComponent({isShown}) {
 const [date, setDate] = useState(new Date())

useEffect(() => {

},[])
  
  return (
    <div 
    className="date"
    style={{
      transition: '0.3s ease-in-out',
      opacity: isShown ? 1 : 0
    }}
    >
        {date.toDateString()}
    </div>
  )
}

export default DateComponent