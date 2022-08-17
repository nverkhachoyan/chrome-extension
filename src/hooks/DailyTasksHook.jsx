import {useState, useEffect, useRef} from 'react'


function useDailyTasksHook() {
  const [tasksArray, setTasksArray] = useState([{title:'', isChecked: false}])
  const [newTask, setNewTask] = useState({title:'', isChecked: false})
  const inputFieldRef = useRef(null)

  useEffect(() => {
    if(localStorage.tasks) {
      setTasksArray(() => JSON.parse(localStorage.tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify(
        [
          {title: 'Take meds', isChecked: true}, 
          {title: 'Do the dishes', isChecked: false}, 
          {title: 'Study for 3 hours', isChecked: false},
          {title: 'Read a book!', isChecked: false},
          {title: 'Exercise!', isChecked: false}
        ]))
    }
  }, [])

  useEffect(() => {
    const listenForClick = document.addEventListener('click', inputFieldRef.current.focus())
    return () => {
      document.removeEventListener('click', listenForClick)
    }
  }, [])


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

    setNewTask({title:'', isChecked: false})
  }

  function updateNewTask(e) {
    setNewTask({
      title: e.target.value,
      isChecked: false
    })
  }

  function removeTask(index) {
    const existing = localStorage.getItem('tasks')
    const parsedData = JSON.parse(existing)
    const newData = parsedData.filter((item, i) => (index !== i))
    localStorage.setItem('tasks', JSON.stringify(newData))
    setTasksArray(newData)
  }


  function handleTaskChecked(index) {
    const existing = localStorage.getItem('tasks')
    const parsedData = JSON.parse(existing)
    const newData = parsedData.map((item, i) => index === i ? {...item, isChecked: !item.isChecked} : item)
    setTasksArray(newData)
    localStorage.setItem('tasks', JSON.stringify(newData))
  }

  return {tasksArray, newTask, inputFieldRef, handleSubmit, updateNewTask, removeTask, handleTaskChecked}
}

export default useDailyTasksHook