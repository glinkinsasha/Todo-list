import { useState } from 'react';
import styles from './TaskList.module.css'

export default function TaskList(props) {
	
	const [actioningTask, setActioningTask] = useState(-1);

	const deleteTask = (id) => {
		const array = props.taskList.filter((task) => task.id !== id );
		props.setTaskList(array);
		fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
			})
	} 

	return(
		<>
			<div className={styles.taskList}>
			{
				props.taskList.map(prop => <div key={prop.id} className={styles.task} 
					onClick={() => actioningTask !== -1 && actioningTask === prop.id ? setActioningTask(-1): setActioningTask(prop.id)}>
					{prop.message}
				{
					actioningTask == prop.id ?
					<div className={styles.buttonsBlock}>
					<button className={styles.button}>Change</button>
					<button className={styles.button} onClick={() => deleteTask(prop.id)}>Delete</button>
					</div>: ''
				}
				</div>)
			}
			</div>
		</>
	)
}