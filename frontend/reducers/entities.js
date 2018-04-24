import { combineReducers } from 'redux';
import TopicsReducer from './topics';
import SubjectsReducer from './subjects';
import QuestionsReducer from './questions';
import AnswersReducer from './answers';
import WeeksReducer from './weeks';

const EntitiesReducer = combineReducers({
	topics: TopicsReducer,
	subjects: SubjectsReducer,
	questions: QuestionsReducer,
	answers: AnswersReducer,
	weeks: WeeksReducer
});

export default EntitiesReducer;
