import * as DayAPIUtil from '../utils/days';

const RECEIVE_ALL_DAYS = 'RECEIVE_ALL_DAYS';
const RECEIVE_DAY = 'RECEIVE_DAY';

const receiveAllDays = days => ({
	type: RECEIVE_ALL_DAYS,
	days
});

const receiveDay = day => ({
	type: RECEIVE_DAY,
	day
});

const fetchDays = () => dispatch =>
	DayAPIUtil.fetchDays().then(days => {
		dispatch(receiveAllDays(days));
	});

const fetchDay = id => dispatch =>
	DayAPIUtil.fetchDay(id).then(day => {
		dispatch(receiveDay(day[id]));
	});

const fetchDaysByWeek = weekId => dispatch =>
	DayAPIUtil.fetchDaysByWeek(weekId).then(days => {
		dispatch(receiveAllDays(days));
	});

const fetchDayByWeek = (weekId, id) => dispatch =>
	DayAPIUtil.fetchDaysByWeek(weekId).then(day => {
		dispatch(receiveDay(day[id]));
	});

export {
	RECEIVE_ALL_DAYS,
	RECEIVE_DAY,
	fetchDays,
	fetchDay,
	fetchDaysByWeek,
	fetchDayByWeek
};
