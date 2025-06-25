import { useState } from 'react'
import styles from './App.module.css'
import useFetchTask from './hooks/useFetchTasks'
import AddTaskBlock from './AddTaskBlock/AddTaskBlock'
import TaskList from './TaskList/TaskList'
import useSort from './hooks/useSort'

export default function App() {
  const [taskList, setTaskList] = useState([]);
	const [addingTask, setAddingTask] = useState(false);
  const [searchValue, setSearthValue] = useState('');
  useFetchTask(setTaskList);

  

  return (
    <div className={styles.app}>
      <input type="text" className={styles.search} placeholder='Search' value={searchValue} onChange={(e) => setSearthValue(e.target.value)} />
      <input type="button" value="Add task" className={styles.addButton} onClick={() => {setAddingTask(true)}} />
      <input type="button" value="Sort tasks" className={styles.sortButton} onClick={() => useSort(taskList, setTaskList)} />
      <AddTaskBlock addingTask={addingTask} setAddingTask={setAddingTask} taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} searchValue={searchValue} />
    </div>
  )
}