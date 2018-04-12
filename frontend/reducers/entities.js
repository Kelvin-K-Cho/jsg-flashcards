import { combineReducers } from 'redux';
import TopicsReducer from './topics';

const EntitiesReducer = combineReducers({
	topics: TopicsReducer
});

export default EntitiesReducer;
