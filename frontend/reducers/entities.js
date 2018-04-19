import { combineReducers } from 'redux';
import TopicsReducer from './topics';
import SubjectsReducer from './subjects';
import QuestionsReducer from './questions';

const EntitiesReducer = combineReducers({
	topics: TopicsReducer,
	subjects: SubjectsReducer,
	questions: QuestionsReducer
});

export default EntitiesReducer;
