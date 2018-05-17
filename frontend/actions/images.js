import * as ImageAPIUtil from '../utils/images';

const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';
const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

const receiveAllImages = images => ({
	type: RECEIVE_ALL_IMAGES,
	images
});

const receiveImage = image => ({
	type: RECEIVE_IMAGE,
	image
});

const fetchImages = () => dispatch =>
	ImageAPIUtil.fetchImages().then(images => {
		dispatch(receiveAllImages(images));
	});

const fetchImage = id => dispatch =>
	ImageAPIUtil.fetchImage(id).then(image => {
		dispatch(receiveImage(image[id]));
	});

const fetchImagesBySubject = subjectId => dispatch =>
	ImageAPIUtil.fetchImagesBySubject(subjectId).then(images => {
		dispatch(receiveAllImages(images));
	});

const fetchImageBySubject = (subjectId, id) => dispatch =>
	ImageAPIUtil.fetchImageBySubject(subjectId, id).then(image => {
		dispatch(receiveImage(image[id]));
	});

export {
	RECEIVE_ALL_IMAGES,
	RECEIVE_IMAGE,
	fetchImages,
	fetchImage,
	fetchImagesBySubject,
	fetchImageBySubject
};
