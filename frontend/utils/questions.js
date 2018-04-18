export const fetchQuestions = () =>
	$.ajax({
		method: 'GET',
		url: `api/questions`
	});

export const fetchQuestion = id =>
	$.ajax({
		method: 'GET',
		url: `api/questions/1`
	});

export const fetchQuestionsBySubject = subjectId =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${subjectId}/questions`
	});

export const fetchQuestionBySubject = (subjectId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${subjectId}/questions/${id}`
	});
