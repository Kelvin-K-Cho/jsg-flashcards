const fetchSuggestions = () =>
	$.ajax({
		method: 'GET',
		url: `api/suggestions`
	});

const fetchSuggestion = id =>
	$.ajax({
		method: 'GET',
		url: `api/suggestions/${id}`
	});

const createSuggestion = suggestion =>
	$.ajax({
		method: 'POST',
		url: `api/suggestions`,
		data: { suggestion }
	});

export { fetchSuggestions, fetchSuggestion, createSuggestion };
