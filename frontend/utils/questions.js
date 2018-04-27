const fetchQuestions = () =>
	$.ajax({
		method: 'GET',
		url: `api/questions`
	});

const fetchQuestion = id =>
	$.ajax({
		method: 'GET',
		url: `api/questions/${id}`
	});

const fetchQuestionsByTopic = topicId =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/questions`
	});

const fetchQuestionByTopic = (topicId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/questions/${id}`
	});

export {
	fetchQuestions,
	fetchQuestion,
	fetchQuestionsByTopic,
	fetchQuestionByTopic
};
