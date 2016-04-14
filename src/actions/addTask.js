export default (state, task) => {
	const lastId = state.lastTaskId || 0;

	const id = lastId + 1;

		task.id = id;
		state.lastTaskId = id;
		state.tasks.push(task);	

		return state;
}