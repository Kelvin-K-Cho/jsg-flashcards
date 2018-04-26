import * as SearchAPIUtil from '../utils/search';

const RECEIVE_ALL_RESULTS = 'RECEIVE_ALL_RESULTS';

const receiveAllResults = results => ({
	type: RECEIVE_ALL_RESULTS,
	results
});

const fetchResults = value => dispatch =>
	SearchAPIUtil.searchSubjects(value).then(results => {
		dispatch(receiveAllResults(results));
	});

export { RECEIVE_ALL_RESULTS, fetchResults };
