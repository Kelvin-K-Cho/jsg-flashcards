import * as SuggestionAPIUtil from '../utils/suggestions';

const RECEIVE_ALL_SUGGESTIONS = 'RECEIVE_ALL_SUGGESTIONS';
const RECEIVE_SUGGESTION = 'RECEIVE_SUGGESTION';

const receiveAllSuggestions = suggestions => ({
	type: RECEIVE_ALL_SUGGESTIONS,
	suggestions
});

const receiveSuggestion = suggestion => ({
	type: RECEIVE_SUGGESTION,
	suggestion
});

const fetchSuggestions = () => dispatch =>
	SuggestionAPIUtil.fetchSuggestions().then(suggestions => {
		dispatch(receiveAllSuggestions(suggestions));
	});

const fetchSuggestion = id => dispatch =>
	SuggestionAPIUtil.fetchSuggestion(id).then(suggestion => {
		dispatch(receiveSuggestion(suggestion[id]));
	});

const createSuggestion = id => dispatch =>
	SuggestionAPIUtil.createSuggestion(id).then(suggestion => {
		dispatch(receiveSuggestion(suggestion));
	});

export {
	RECEIVE_ALL_SUGGESTIONS,
	RECEIVE_SUGGESTION,
	fetchSuggestions,
	fetchSuggestion,
	createSuggestion
};
