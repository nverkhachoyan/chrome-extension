import {useContext} from 'react'
import { SettingsContext } from '../contexts/SettingsContext'
import useDailyTasksHook from "../hooks/DailyTasksHook"
import removeIcon from '../assets/icons/remove.svg'
import './DailyTasks.css'

function DailyTasks({isShown}) {
  const {settings} = useContext(SettingsContext)
  const {tasksArray, newTask, inputFieldRef, handleSubmit, updateNewTask, removeTask,  handleTaskChecked} = useDailyTasksHook()
  
  function getTasks() {
    return tasksArray.map((task, index) => (
      <div 
      key={index}
      className="task">
        <h3 
        key={index}
        className={`task-title ${task.isChecked ? 'taskChecked' : ''}`}
        onClick={() => handleTaskChecked(index)}
        >
          {task.title}
        </h3>
        {task.isChecked && <div className="task-remove" onClick={() => removeTask(index)}></div>}
      </div>
    ))
  }

  return (
    <div 
    onClick={() => inputFieldRef.current.focus()} 
    className="daily-tasks"
    style={{
      transition: '0.3s ease-in-out',
      opacity: isShown ? 1 : 0}}
    >
      <h2>Daily Tasks</h2>
      <form className='task-form' onSubmit={(e) => handleSubmit(e)}>
        <input 
          className='task-input' 
          type="text" 
          ref={inputFieldRef}
          value={newTask.title} 
          onChange={e => updateNewTask(e)}
        />
      </form>
      <div className="daily-tasks-container">
        {tasksArray.length > 0 ? getTasks() : <span className='no-tasks'>No tasks to show</span>}
        
      </div>
    </div>
  )
}

export default DailyTasks