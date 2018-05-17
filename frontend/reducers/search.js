import { RECEIVE_ALL_RESULTS } from '../actions/search';
import merge from 'lodash/merge';

const SearchesReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_RESULTS:
			return merge({}, action.results);
		default:
			return oldState;
	}
};

export default SearchesReducer;
