import { useState } from 'react';
import styles from './AddTaskBlock.module.css'


export default function addTaskBlock(props) {
	const [addTaskValue, setAddTaskValue] = useState('');

	const addTask = (message) => {
		const array = props.taskList;
		const id = Date.now();
		array.push({'id': `${id}`, 'message': `${message}`});
		props.setTaskList(array);
		props.setAddingTask(false);
		setAddTaskValue('');

		fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
               'id': `${id}`,
               'message': `${message}`,
            })})
	}

	return (
		<>
		{
			props.addingTask ? 
				<div className={styles.addTaskBlock}>
					<input type="text" className={styles.addTaskInput} placeholder='Message' value={addTaskValue} onChange={(e) => setAddTaskValue(e.target.value)} />
					<input 
						type="button" 
						value={addTaskValue !== '' ? 'add': 'X'} 
						className={styles.addInputButton} 
						onClick={() => addTaskValue !== '' ? addTask(addTaskValue): props.setAddingTask(false)} />
				</div> : ''
		}
		</>
	)
}