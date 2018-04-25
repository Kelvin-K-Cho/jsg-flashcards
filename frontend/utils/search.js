const searchSubjects = value =>
	$.ajax({
		method: 'GET',
		url: 'api/searches/',
		data: { value }
	});

export { searchSubjects };
