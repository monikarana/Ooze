import fecha from 'fecha';

export default (state, period) => {
	const lastPeriodId = state.lastPeriodId || 0;
	const id = lastPeriodId + 1;

	if (state.lastPeriodId) {
		const lastPeriod = state.periods[lastPeriodId - 1];

		lastPeriod.end = fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
	} 

	if (state.activeTaskId === period.taskId) {
		state.activeTaskId =  null;
		return state; 
	}

	period.id = id;
	state.lastPeriodId = id;
	state.activeTaskId = period.taskId;
	state.periods.push(period);

	return state;
};