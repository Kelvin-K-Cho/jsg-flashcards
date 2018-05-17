import { RECEIVE_ALL_SUBJECTS, RECEIVE_SUBJECT } from '../actions/subjects';
import merge from 'lodash/merge';

const SubjectsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_SUBJECTS:
			return merge({}, action.subjects);
		case RECEIVE_SUBJECT:
			return merge({}, oldState, {
				[action.subject.id]: action.subject
			});
		default:
			return oldState;
	}
};

export default SubjectsReducer;
