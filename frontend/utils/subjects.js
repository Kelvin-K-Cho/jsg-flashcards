export const fetchSubjects = () =>
	$.ajax({
		method: 'GET',
		url: `api/subjects`
	});

export const fetchSubject = id =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${id}`
	});

export const fetchSubjectsByTopic = topicId =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/subjects`
	});

export const fetchSubjectByTopic = (topicId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/subjects/${id}`
	});
