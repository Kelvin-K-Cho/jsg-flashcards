import {
	RECEIVE_ALL_SUGGESTIONS,
	RECEIVE_SUGGESTION
} from '../actions/suggestions';
import merge from 'lodash/merge';

const SuggestionsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_SUGGESTIONS:
			return merge({}, action.suggestions);
		case RECEIVE_SUGGESTION:
			return merge({}, oldState, {
				[action.suggestion.id]: action.suggestion
			});
		default:
			return oldState;
	}
};

export default SuggestionsReducer;
