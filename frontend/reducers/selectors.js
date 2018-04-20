import values from 'lodash/values';
import flattenDeep from 'lodash/flattenDeep';

const selectTopics = state => values(state.entities.topics);
const selectSubjects = state => values(state.entities.subjects);
const selectQuestions = state => values(state.entities.questions);
const selectAnswers = state => values(state.entities.answers);
const selectCorrectAnswers = state =>
	values(state.entities.answers).filter(answer => answer.correct === true);
const checkCards = cards => {
	let sides = flattenDeep(cards);
	return sides.every(side => side !== undefined);
};

export {
	selectTopics,
	selectSubjects,
	selectQuestions,
	selectAnswers,
	selectCorrectAnswers,
	checkCards
};
