import React from 'react'
import '../styles/create-task.css';
import TaskRow from './TaskRow.js';

const CreateTask = (props) => {
	const taskIsValid = (taskDescription, taskRate) => {
 	 return taskDescription != '' && taskRate != '';
	}

	const createTask = (event) => {
		var taskDescription = document.getElementById('task-desc').value;
		var taskRate = document.getElementById('task-rate').value;
		var startTime = new Date();

		var task = {
				id: 0,
				description: taskDescription,
				taskRate: parseFloat(taskRate)
			};
		if (taskIsValid(taskDescription, taskRate)) {
			props.handleCreateTask(task);
			document.getElementById('task-desc').value = '';
			document.getElementById('task-rate').value = '';
		}
	}

	return (
		<div >
			<span>
				<input  id='task-desc'  className='desc-input' type='text' placeholder='Enter task description' />
			</span>
			<span>
				<input id='task-rate' className='rate-input' type='number' placeholder='Enter hourly rate' />
			</span>
			<span>
				<button className='add-btn' onClick={createTask}>Add</button>
			</span>
		</div>

	)
}

export default CreateTask;