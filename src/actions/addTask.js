import _ from 'lodash';

export default (state, task) => {
		const id = state.lastTaskId + 1;

		task.id = id;
		state.lastTaskId = id;
		state.tasks.push(task);	

		return state;
}