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

export { fetchSubjects, fetchSubject };
