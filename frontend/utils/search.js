const search = value =>
	$.ajax({
		method: 'GET',
		url: 'api/searches/',
		data: { value }
	});

export default search;
