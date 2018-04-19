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
