import { useEffect } from "react";

export default function useFetchTask(setTaskList) {
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
} 