import {useState, useRef, useEffect} from 'react'
import './DailyTasks.css'

function DailyTasks() {
  const [tasksArray, setTasksArray] = useState([])
  const [newTask, setNewTask] = useState('')
  const inputFieldRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(newTask)
    const existing = localStorage.getItem('tasks')

    if(existing) {
      const parsedData = JSON.parse(existing)
      parsedData.unshift(newTask)
      setTasksArray(parsedData)
      localStorage.setItem('tasks', JSON.stringify(parsedData))
    } else {
      localStorage.setItem('tasks', JSON.stringify([newTask]))
    }
  }

  useEffect(() => {
    if(localStorage.tasks) {
      setTasksArray(() => JSON.parse(localStorage.tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify(['Take meds', 'Do the dishes', 'Study for 3 hours', 'Read a book!', 'Exercise!']))
    }
  }, [])

  useEffect(() => {
    const listenForClick = document.addEventListener('click', inputFieldRef.current.focus())
    return () => {
      document.removeEventListener('click', listenForClick)
    }
  }, [])


  return (
    <div onClick={() => inputFieldRef.current.focus()} className="daily-tasks">
      <form className='task-form' onSubmit={(e) => handleSubmit(e)}>
          <input 
            className='task-input' 
            type="text" 
            ref={inputFieldRef}
            value={newTask} 
            onChange={e => setNewTask(e.target.value)}
            />
        </form>
      <div className="daily-tasks-container">
        {tasksArray.map((task, index) => (
        <h3 className='task' key={index}>{task}</h3>
        ))}
      </div>
      <div className="daily-tasks-blur"></div>
    </div>
  )
}

export default DailyTasks