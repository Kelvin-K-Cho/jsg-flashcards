import * as QuestionAPIUtil from '../utils/questions';

const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

const receiveAllQuestions = questions => ({
	type: RECEIVE_ALL_QUESTIONS,
	questions
});

const receiveQuestion = question => ({
	type: RECEIVE_QUESTION,
	question
});

const fetchQuestions = () => dispatch =>
	QuestionAPIUtil.fetchQuestions().then(questions => {
		dispatch(receiveAllQuestions(questions));
	});

const fetchQuestion = id => dispatch =>
	QuestionAPIUtil.fetchQuestion(id).then(question => {
		dispatch(receiveQuestion(question[id]));
	});

const fetchQuestionsBySubject = (subjectId, id) => dispatch =>
	QuestionAPIUtil.fetchQuestionsBySubject(subjectId, id).then(questions => {
		dispatch(receiveAllQuestions(questions));
	});

const fetchQuestionBySubject = (subjectId, id) => dispatch =>
	QuestionAPIUtil.fetchQuestionBySubject(subjectId, id).then(question => {
		dispatch(receiveQuestion(question[id]));
	});

export {
	RECEIVE_ALL_QUESTIONS,
	RECEIVE_QUESTION,
	fetchQuestions,
	fetchQuestion,
	fetchQuestionsBySubject,
	fetchQuestionBySubject
};
