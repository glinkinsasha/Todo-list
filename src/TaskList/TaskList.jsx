import { useState } from 'react';
import styles from './TaskList.module.css'

export default function TaskList(props) {
	
	const [actioningTask, setActioningTask] = useState(4);

	return(
		<>
			<div className={styles.taskList}>
			{
				props.taskList.map(prop => <div key={prop.id} className={styles.task} onClick={() => setActioningTask(prop.id)}>{prop.message}
				{
					actioningTask == prop.id ?
					<div className={styles.buttonsBlock}>
					<button className={styles.button}>Change</button>
					<button className={styles.button}>Delete</button>
					</div>: ''
				}
				</div>)
			}
			</div>
		</>
	)
}