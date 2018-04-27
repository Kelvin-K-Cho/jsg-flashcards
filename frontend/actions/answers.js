import * as AnswerAPIUtil from '../utils/answers';

const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

const receiveAllAnswers = answers => ({
	type: RECEIVE_ALL_ANSWERS,
	answers
});

const receiveAnswer = answer => ({
	type: RECEIVE_ANSWER,
	answer
});

const fetchAnswers = () => dispatch =>
	AnswerAPIUtil.fetchAnswers().then(answers => {
		dispatch(receiveAllAnswers(answers));
	});

const fetchAnswer = id => dispatch =>
	AnswerAPIUtil.fetchAnswer(id).then(answer => {
		dispatch(receiveAnswer(answer[id]));
	});

const fetchAnswersByQuestion = questionId => dispatch =>
	AnswerAPIUtil.fetchAnswersByQuestion(questionId).then(answers => {
		dispatch(receiveAllAnswers(answers));
	});

const fetchAnswerByQuestion = (questionId, id) => dispatch =>
	AnswerAPIUtil.fetchAnswerByQuestion(questionId, id).then(answer => {
		dispatch(receiveAnswer(answer[id]));
	});

const fetchAnswersByTopic = topicId => dispatch =>
	AnswerAPIUtil.fetchAnswersByTopic(topicId).then(answers => {
		dispatch(receiveAllAnswers(answers));
	});

const fetchAnswerByTopic = (topicId, id) => dispatch =>
	AnswerAPIUtil.fetchAnswerByTopic(topicId, id).then(answer => {
		dispatch(receiveAnswer(answer[id]));
	});

export {
	RECEIVE_ALL_ANSWERS,
	RECEIVE_ANSWER,
	fetchAnswers,
	fetchAnswer,
	fetchAnswersByQuestion,
	fetchAnswerByQuestion,
	fetchAnswersByTopic,
	fetchAnswerByTopic
};
