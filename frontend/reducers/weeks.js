import { RECEIVE_ALL_WEEKS, RECEIVE_WEEK } from '../actions/weeks';
import merge from 'lodash/merge';

const WeeksReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_WEEKS:
			return merge({}, action.weeks);
		case RECEIVE_WEEK:
			return merge({}, oldState, {
				[action.week.id]: action.week
			});
		default:
			return oldState;
	}
};

export default WeeksReducer;
