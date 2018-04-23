import * as WeekAPIUtil from '../utils/weeks';

const RECEIVE_ALL_WEEKS = 'RECEIVE_ALL_WEEKS';
const RECEIVE_WEEK = 'RECEIVE_WEEK';

const receiveAllWeeks = weeks => ({
	type: RECEIVE_ALL_WEEKS,
	weeks
});

const receiveWeek = week => ({
	type: RECEIVE_WEEK,
	week
});

const fetchWeeks = () => dispatch =>
	WeekAPIUtil.fetchWeeks().then(weeks => {
		dispatch(receiveAllWeeks(weeks));
	});

const fetchWeek = id => dispatch =>
	WeekAPIUtil.fetchWeek(id).then(week => {
		dispatch(receiveWeek(week[id]));
	});

export { RECEIVE_ALL_WEEKS, RECEIVE_WEEK, fetchWeeks, fetchWeek };
