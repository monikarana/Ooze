import React from 'react';
import _ from 'lodash';
import CreateTask from '../components/CreateTask';
import '../styles/app.css';
import addTask from '../actions/addTask';
import addPeriod from '../actions/addPeriod';
import TaskRow from '../components/TaskRow';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			tasks: [],
			periods: [],
			lastTaskId: null,
			lastPeriodId: null,
			activeTaskId: null
		};
	}

	updateSate = (nextState) => {
		this.setState(nextState);
	}

	handleCreateTask = (task) => {
		const nextState = addTask(this.state, task);

		this.updateSate(nextState);
	};

	handleStartPeriod = (period) => {
		const nextState = addPeriod(this.state, period);

		this.updateSate(nextState);
	}

	render () {
			const tasks = this.state.tasks;

		return (
			<div className='app'>
				<div className='app-title'>
					<h1>Ooze</h1>
				</div>
				<div className='app-container'>
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