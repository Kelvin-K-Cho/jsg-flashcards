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

const fetchQuestionsBySubject = subjectId =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${subjectId}/questions`
	});

const fetchQuestionBySubject = (subjectId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${subjectId}/questions/${id}`
	});

export {
	fetchQuestions,
	fetchQuestion,
	fetchQuestionsBySubject,
	fetchQuestionBySubject
};
