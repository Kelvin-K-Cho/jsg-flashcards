import values from 'lodash/values';

const selectTopics = state => values(state.entities.topics);
const selectSubjects = state => values(state.entities.subjects);
const selectQuestions = state => values(state.entities.questions);
const selectAnswers = state => values(state.entities.answers);
const selectCorrectAnswers = state =>
	values(state.entities.answers).filter(answer => answer.correct === true);

export {
	selectTopics,
	selectSubjects,
	selectQuestions,
	selectAnswers,
	selectCorrectAnswers
};
