import { combineReducers } from 'redux';
import TopicsReducer from './topics';
import SubjectsReducer from './subjects';
import QuestionsReducer from './questions';
import AnswersReducer from './answers';

const EntitiesReducer = combineReducers({
	topics: TopicsReducer,
	subjects: SubjectsReducer,
	questions: QuestionsReducer,
	answers: AnswersReducer
});

export default EntitiesReducer;
