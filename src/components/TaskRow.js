import React from 'react';
import '../styles/task-row.css';
import fecha from 'fecha';

const createPeriod = (task) => {
	return {
		taskId: task.id,
		start: fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
	};
};

const TaskRow = (props) => {
	const task = props.task;
	const isActive = props.isActive;

	const addPeriod = () => {		
		const newPeriod = createPeriod(task);

		props.onStartPeriod(newPeriod);
	};

	return (
		<div className={isActive ? 'active-task-row' : ''}>
			<span className='task-desc'>
				{task.description}
			</span>
			<span className='task-rate'>
				{task.taskRate}
			</span>
			<input 
				className='start-btn' 
				onClick={addPeriod} 
				type='button' 
				value={isActive ? 'Stop' : 'Start'}
			/>
		</div>
		)
}

export default TaskRow;