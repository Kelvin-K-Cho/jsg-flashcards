const fetchDays = () =>
	$.ajax({
		method: 'GET',
		url: `api/days`
	});

const fetchDay = id =>
	$.ajax({
		method: 'GET',
		url: `api/days/${id}`
	});

const fetchDaysByWeek = weekId =>
	$.ajax({
		method: 'GET',
		url: `api/weeks/${weekId}/days`
	});

const fetchDayByWeek = (weekId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/weeks/${weekId}/days/${id}`
	});

export { fetchDays, fetchDay, fetchDaysByWeek, fetchDayByWeek };
