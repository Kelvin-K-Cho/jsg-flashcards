const fetchImages = () =>
	$.ajax({
		method: 'GET',
		url: `api/images`
	});

const fetchImage = id =>
	$.ajax({
		method: 'GET',
		url: `api/images/${id}`
	});

const fetchImagesByTopic = topicId =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/images`
	});

const fetchImageByTopic = (topicId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/topics/${topicId}/images/${id}`
	});

const fetchImagesBySubject = subjectId =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${subjectId}/images`
	});

const fetchImageBySubject = (subjectId, id) =>
	$.ajax({
		method: 'GET',
		url: `api/subjects/${subjectId}/images/${id}`
	});

export {
	fetchImages,
	fetchImage,
	fetchImagesByTopic,
	fetchImageByTopic,
	fetchImagesBySubject,
	fetchImageBySubject
};
