import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors';
import entitiesReducer from './entities';

const RootReducer = combineReducers({
	entities: entitiesReducer,
	session: sessionReducer
});

export default RootReducer;
