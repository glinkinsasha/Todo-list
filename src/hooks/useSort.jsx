export default function sortTasks(taskList, setTaskList) {
	const array = taskList.slice(0);
	array.sort((a, b) => a.message > b.message ? 1 : -1)
	setTaskList(array);
}