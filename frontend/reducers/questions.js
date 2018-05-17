import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION } from '../actions/questions';
import merge from 'lodash/merge';

const QuestionsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_QUESTIONS:
			return merge({}, action.questions);
		case RECEIVE_QUESTION:
			return merge({}, oldState, {
				[action.question.id]: action.question
			});
		default:
			return oldState;
	}
};

export default QuestionsReducer;
