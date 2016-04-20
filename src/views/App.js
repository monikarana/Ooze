import React from 'react';
import _ from 'lodash';
import CreateTask from '../components/CreateTask';
import '../styles/app.css';
import addTask from '../actions/addTask';
import addPeriod from '../actions/addPeriod';
import TaskRow from '../components/TaskRow';
import ActiveTask from '../components/ActiveTask';
import getClockForPeriod from '../actions/getClockForPeriod';
import resetClock from '../actions/resetClock';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			tasks: [],
			periods: [],
			lastTaskId: null,
			lastPeriodId: null,
			activeTaskId: null,
			clockMinutes: 0
		};
	}

	updateState = (nextState) => {
		this.setState(nextState);
	}

	handleCreateTask = (task) => {
		const nextState = addTask(this.state, task);
		
		this.updateState(nextState);
	};

	handleStartPeriod = (period) => {
		const nextState = addPeriod(this.state, period);

		if (nextState.activeTaskId) {
			this.stopClockInterval();
			this.startClockInterval(period);
		} else {
			this.stopClockInterval();
		}

		this.updateState(nextState);
	};

	startClockInterval = (period) => {
		this.clockInterval = setInterval(() => {
			console.log('Running interval');
			const nextState = getClockForPeriod(this.state, period);
			this.updateState(nextState);
		}, 1000 * 60);
	};

	stopClockInterval = () => {
		if (this.clockInterval) {
			clearInterval(this.clockInterval);
			
			const nextState = resetClock(this.state);
			this.updateState(nextState);
		}
	}

	getTaskById = (taskId) => {
		return this.state.tasks[taskId - 1];
	};

	getPeriodsForTask = (taskId) => {
		return _.filter(this.state.periods, (period) => {
			return period.taskId === taskId;
		});
	};

	render () {
		const tasks = this.state.tasks;
		const activeTaskId = this.state.activeTaskId;

		return (
			<div className='app'>
				<div className={this.state.activeTaskId ? 'app-title-active-task' : 'app-title'}>
					Ooze
				</div>
				<div className='app-container'>
					{ this.state.activeTaskId ? 
						<ActiveTask 
							task={this.getTaskById(activeTaskId)}
							periods={this.getPeriodsForTask(activeTaskId)}
							clockMinutes={this.state.clockMinutes}
						/> :
						null}
					<CreateTask
						handleCreateTask = {this.handleCreateTask}
					/>
					{_.map(tasks, (task) => {
						return (
								<TaskRow
									isActive={this.state.activeTaskId === task.id} 
									task={task}
									key={task.id}
									onStartPeriod={this.handleStartPeriod}
								/>
							)
					})

					}
				</div>
			</div>
		);
	}
}

export default App;