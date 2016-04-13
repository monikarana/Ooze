import React from 'react';
import '../styles/task-row.css';

const TaskRow = (props) => {
	const task = props.task;

	const startTimer = () => {
		console.log('test');
	}
	return (
		<div>
			<span className='task-desc'>
				{task.description}
			</span>
			<span className='task-rate'>
				{task.taskRate}
			</span>
			<button className='start-btn' onClick={startTimer}>Start</button>
		</div>
		)
}

export default TaskRow;