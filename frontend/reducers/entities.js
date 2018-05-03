import { combineReducers } from 'redux';
import SubjectsReducer from './subjects';
import TopicsReducer from './topics';
import QuestionsReducer from './questions';
import AnswersReducer from './answers';
import WeeksReducer from './weeks';
import DaysReducer from './days';
import SearchesReducer from './search';
import ImagesReducer from './images';
import SuggestionsReducer from './suggestions';

const EntitiesReducer = combineReducers({
	subjects: SubjectsReducer,
	topics: TopicsReducer,
	questions: QuestionsReducer,
	answers: AnswersReducer,
	weeks: WeeksReducer,
	days: DaysReducer,
	results: SearchesReducer,
	images: ImagesReducer,
	suggestions: SuggestionsReducer
});

export default EntitiesReducer;
