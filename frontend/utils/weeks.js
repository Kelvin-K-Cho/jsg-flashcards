const fetchWeeks = () =>
	$.ajax({
		method: 'GET',
		url: `api/weeks`
	});

const fetchWeek = id =>
	$.ajax({
		method: 'GET',
		url: `api/weeks/${id}`
	});

export { fetchWeeks, fetchWeek };
