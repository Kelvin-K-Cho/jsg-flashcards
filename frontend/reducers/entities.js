import { combineReducers } from 'redux';
import SubjectsReducer from './subjects';
import TopicsReducer from './topics';
import QuestionsReducer from './questions';
import AnswersReducer from './answers';
import WeeksReducer from './weeks';
import DaysReducer from './days';
import SearchesReducer from './search';

const EntitiesReducer = combineReducers({
	subjects: SubjectsReducer,
	topics: TopicsReducer,
	questions: QuestionsReducer,
	answers: AnswersReducer,
	weeks: WeeksReducer,
	days: DaysReducer,
	results: SearchesReducer
});

export default EntitiesReducer;
