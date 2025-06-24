import { useState } from 'react'
import styles from './App.module.css'
import useFetchTask from './hooks/useFetchTasks'
import AddTaskBlock from './AddTaskBlock/AddTaskBlock'
import TaskList from './TaskList/TaskList'

function App() {
  const [taskList, setTaskList] = useState([]);
	const [addingTask, setAddingTask] = useState(false);

  useFetchTask(setTaskList);

  return (
    <div className={styles.app}>
      <input type="text" className={styles.search} placeholder='Search' />
      <input type="button" value="Add task" className={styles.addButton} onClick={() => {setAddingTask(true)}} />
      <input type="button" value="Sort tasks" className={styles.sortButton} />
      <AddTaskBlock addingTask={addingTask} setAddingTask={setAddingTask} />
      <TaskList taskList={taskList} />
      
    </div>
  )
}

export default App
