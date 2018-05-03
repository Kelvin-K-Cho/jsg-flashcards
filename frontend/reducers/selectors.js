import values from 'lodash/values';
import flattenDeep from 'lodash/flattenDeep';

const selectSubjects = state => values(state.entities.subjects);
const selectTopics = state => values(state.entities.topics);
const selectQuestions = state => values(state.entities.questions);
const selectAnswers = state => values(state.entities.answers);
const selectWeeks = state => values(state.entities.weeks);
const selectDays = state => values(state.entities.days);
const selectResults = state => values(state.entities.results);
const selectImages = state => values(state.entities.images);
const selectSuggestions = state => values(state.entities.suggestions);

const selectCorrectAnswers = state =>
	values(state.entities.answers).filter(answer => answer.correct === true);

const checkCards = cards => {
	let sides = flattenDeep(cards);
	return sides.every(side => side !== undefined);
};

export {
	selectSubjects,
	selectTopics,
	selectQuestions,
	selectAnswers,
	selectWeeks,
	selectDays,
	selectResults,
	selectImages,
	selectSuggestions,
	selectCorrectAnswers,
	checkCards
};
