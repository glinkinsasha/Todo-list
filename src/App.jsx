import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {

  const [taskList, setTaskList] = useState([]);

  const [addingTask, setAddingTask] = useState(false);
  const [actioningTask, setActioningTask] = useState(0);

  const [addTaskValue, setAddTaskValue] = useState('');



  useEffect(() => {
    const URL = 'http://localhost:3000/tasks';

    const fetchTasks = async () => {
      let response = await fetch(URL);
      response.json()
      .then( result => setTaskList(result))
      .catch((error) => console.log(error))
      .finally(() => {});
    }
    fetchTasks();
  },[])

  const addTask = () => {

  }

  return (
    <div className={styles.app}>
      <input type="text" className={styles.search} placeholder='Search' />
      <input type="button" value="Add task" className={styles.addButton} onClick={() => {setAddingTask(true)}} />
      <input type="button" value="Sort tasks" className={styles.sortButton} />
      {
        addingTask ? 
        <div className={styles.addTaskBlock}>
          <input type="text" className={styles.addTaskInput} placeholder='Message' value={addTaskValue} onChange={(e) => setAddTaskValue(e.target.value)} />
          <input 
            type="button" 
            value={addTaskValue !== '' ? 'add': 'X'} 
            className={styles.addInputButton} 
            onClick={() => addTaskValue !== '' ? addTask(): setAddingTask(false)} />
        </div>: ''
      }
      
      <div className={styles.taskList}>
        {
          taskList.map(props => <div key={props.id} className={styles.task}>{props.message}
          {
            actioningTask == props.id ?
            <div className={styles.buttonsBlock}>
              <button className={styles.button}>Change</button>
              <button className={styles.button}>Delete</button>
            </div>: ''
          }
            
          </div>)
        }
        
      </div>
    </div>
  )
}

export default App
