const fetchTopics = () =>
	$.ajax({
		method: 'GET',
		url: `api/topics`
	});

const fetchTopic = id =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${id}`
	});

const fetchTopicsBySubject = subjectId =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${subjectId}/topics`
	});

const fetchTopicBySubject = (subjectId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${subjectId}/topics/${id}`
	});

const fetchTopicsByWeek = weekId =>
	$.ajax({
		method: 'GET',
		url: `api/weeks/${weekId}/topics`
	});

const fetchTopicByWeek = (weekId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/weeks/${weekId}/topics/${id}`
	});

export {
	fetchTopics,
	fetchTopic,
	fetchTopicsBySubject,
	fetchTopicBySubject,
	fetchTopicsByWeek,
	fetchTopicByWeek
};
