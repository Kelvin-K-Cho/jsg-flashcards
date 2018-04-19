import { RECEIVE_ALL_ANSWERS, RECEIVE_ANSWER } from '../actions/answers';
import merge from 'lodash/merge';

const AnswersReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_ANSWERS:
			return merge({}, action.answers);
		case RECEIVE_ANSWER:
			return merge({}, oldState, {
				[action.answer.id]: action.answer
			});
		default:
			return oldState;
	}
};

export default AnswersReducer;
