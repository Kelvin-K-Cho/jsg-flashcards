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

export { fetchTopics, fetchTopic };
