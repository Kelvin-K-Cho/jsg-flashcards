import { RECEIVE_ALL_IMAGES, RECEIVE_IMAGE } from '../actions/images';
import merge from 'lodash/merge';

const ImagesReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_ALL_IMAGES:
			return merge({}, action.images);
		case RECEIVE_IMAGE:
			return merge({}, oldState, {
				[action.image.id]: action.image
			});
		default:
			return oldState;
	}
};

export default ImagesReducer;
