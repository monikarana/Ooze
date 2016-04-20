import fecha from 'fecha';

export default (state, period) => {
	const start = fecha.parse(period.start, 'YYYY-MM-DD HH:mm:ss'); 
	
	state.clockMinutes = Math.floor((new Date() - start) / (1000 * 60));

	return state;
};