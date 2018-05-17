const searchTopics = value =>
	$.ajax({
		method: 'GET',
		url: 'api/searches/',
		data: { value }
	});

export { searchTopics };
