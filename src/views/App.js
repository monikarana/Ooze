import React from 'react';
import _ from 'lodash';
import CreateTask from '../components/CreateTask';
import '../styles/app.css';
import addTask from '../actions/addTask';
import TaskRow from '../components/TaskRow';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			tasks: [],
			periods: [],
			lastTaskId: 0,
			lastPeriodId: 0
		};
	}

	updateSate = (nextState) => {
		this.setState(nextState);
	}

	handleCreateTask = (task) => {
		const nextState = addTask(this.state, task);

		this.updateSate(nextState);
		console.log('task entered', this.state);
	};

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
									task={task}
									key={task.id}
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