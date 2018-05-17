const fetchAnswers = () =>
	$.ajax({
		method: 'GET',
		url: `api/answers`
	});

const fetchAnswer = id =>
	$.ajax({
		method: 'GET',
		url: `api/answers/${id}`
	});

const fetchAnswersByQuestion = questionId =>
	$.ajax({
		method: 'GET',
		url: `api/questions/${questionId}/answers`
	});

const fetchAnswerByQuestion = (questionId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/questions/${questionId}/answers/${id}`
	});

const fetchAnswersByTopic = topicId =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/answers`
	});

const fetchAnswerByTopic = (topicId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/answers/${id}`
	});

export {
	fetchAnswers,
	fetchAnswer,
	fetchAnswersByQuestion,
	fetchAnswerByQuestion,
	fetchAnswersByTopic,
	fetchAnswerByTopic
};
