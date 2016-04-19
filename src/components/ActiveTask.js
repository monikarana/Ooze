import React from 'react';
import '../styles/active-task.css';
import _ from 'lodash';
import fecha from 'fecha';
import leftPad from '../lib/leftPad';

const ActiveTask = (props) => {

	const task = props.task;
	const periods = props.periods;
	const clockMinutes = props.clockMinutes;

	let activePeriod = _.find(periods, (period) => {
		return !period.end;
	});

	const timeSoFar = _.reduce(periods, (acc, period) => {
		const start = fecha.parse(period.start, 'YYYY-MM-DD HH:mm:ss');
		const end = fecha.parse((period.end || period.start), 'YYYY-MM-DD HH:mm:ss');

		return (Math.floor((end - start) / (1000 * 60))) + acc
	}, 0);

	const hours = Math.floor(timeSoFar / 60);
	const minutes = timeSoFar % 60;

	const timeSoFarString = (hours ? hours + ' Hr ' : '') + minutes + ' min';

	const clockHours = leftPad(Math.floor(clockMinutes / 60), 2);
	const clockMin = leftPad(clockMinutes % 60, 2);
	
	return (
		<div className='active-task-info-row'>
			<span className='working-on-label'>Working on</span>
			<span className='active-task-desc'>{task.description}</span>

			<span className='active-task-details'>
				<div className='active-task-clock'>{clockHours}:{clockMin}</div>
				<div className='active-task-total-time'>Earlier {timeSoFarString}</div>
			</span>
		</div>	
	);
}

export default ActiveTask;