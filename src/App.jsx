import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {

  const [taskList, setTaskList] = useState([])



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

  return (
    <>
      <div>
        {taskList.map(props => <div key={props.id} className={styles.task}>{props.message}</div>)}
      </div>
    </>
  )
}

export default App
