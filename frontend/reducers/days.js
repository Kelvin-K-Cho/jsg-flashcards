import { RECEIVE_ALL_DAYS, RECEIVE_DAY } from '../actions/days';
import merge from 'lodash/merge';

const DaysReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_DAYS:
			return merge({}, action.days);
		case RECEIVE_DAY:
			return merge({}, oldState, {
				[action.day.id]: action.day
			});
		default:
			return oldState;
	}
};

export default DaysReducer;
