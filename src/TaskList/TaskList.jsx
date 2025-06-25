import { useState } from 'react';
import styles from './TaskList.module.css'

export default function TaskList(props) {	
	const [actioningTask, setActioningTask] = useState(-1);
	const [changing, setChanging] = useState(-1);

	const deleteTask = (id) => {
		const array = props.taskList.filter((task) => task.id !== id );
		props.setTaskList(array);
		fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
			})
	} 

	
	const [messageChangeInput, setMessageChangeInput] = useState();

	const changeTask = (id, message) => {
		setMessageChangeInput(message);
		setChanging(id);
	}

	const changeTasksMessage = (id) => {
		const array = props.taskList;
		for (let i = 0; i < array.length; i++) {
			id === array[i].id ? array[i].message = messageChangeInput: ''
		}
		props.setTaskList(array);
		setChanging(-1);

		fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
               id: id,
               message: messageChangeInput,
            }),
      })
	}


	return(
		<>
			<div className={styles.taskList}>
			{
				props.taskList.map(prop => {return prop.message.indexOf(props.searchValue) !== -1 ? <div key={prop.id} className={styles.task} 
					onClick={() => actioningTask !== -1 && actioningTask === prop.id ? setActioningTask(-1): setActioningTask(prop.id)}>
					{changing !== -1 && changing === prop.id ? 
					<div className={styles.changeBlock}>
						<input type='text' className={styles.changeInput} value={messageChangeInput} onChange={(e) => setMessageChangeInput(e.target.value)} />
						<input type="button" className={styles.changeInputButton} value="OK" onClick={() => changeTasksMessage(prop.id)} />
					</div> : 
					<span id={prop.id}>{prop.message}</span>}
				{
					actioningTask === prop.id && changing === -1 ?
					<div className={styles.buttonsBlock}>
					<button className={styles.button} onClick={() => changeTask(prop.id, prop.message)}>Change</button>
					<button className={styles.button} onClick={() => deleteTask(prop.id)}>Delete</button>
					</div>: ''
				}
				</div>: ''})
			}
			</div>
		</>
	)
}