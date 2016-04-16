import React from 'react';
import '../styles/active-task.css';
import _ from 'lodash';

const ActiveTask = (props) => {

	const task = props.task;
	const periods = props.periods;

	let activePeriod = _.find(periods, (period) => {
		return !period.end;
	});

	return (
		<div className='active-task-info-row'>
			<span className='working-on-label'>Working on</span>
			<span className='active-task-desc'>{task.description}</span>

			<span className='active-task-details'>
				<div className='active-task-clock'>00:00</div>
				<div className='active-task-total-time'>Total 5 Hrs 32 min</div>
			</span>
		</div>	
	);
}

export default ActiveTask;