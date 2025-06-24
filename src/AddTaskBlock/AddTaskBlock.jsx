import { useState } from 'react';
import styles from './AddTaskBlock.module.css'


export default function addTaskBlock(props) {
	const [addTaskValue, setAddTaskValue] = useState('');

	const addTask = () => {

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
						onClick={() => addTaskValue !== '' ? addTask(): props.setAddingTask(false)} />
				</div> : ''
		}
		</>
	)
}