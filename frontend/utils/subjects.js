const fetchSubjects = () =>
	$.ajax({
		method: 'GET',
		url: `api/subjects`
	});

const fetchSubject = id =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${id}`
	});

const fetchSubjectsByTopic = topicId =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/subjects`
	});

const fetchSubjectByTopic = (topicId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/subjects/${id}`
	});

export {
	fetchSubjects,
	fetchSubject,
	fetchSubjectsByTopic,
	fetchSubjectByTopic
};
