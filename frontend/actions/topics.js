import * as TopicAPIUtil from '../utils/topics';

export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

const receiveAllTopics = topics => ({
	type: RECEIVE_ALL_TOPICS,
	topics
});

const receiveTopic = topic => ({
	type: RECEIVE_TOPIC,
	topic
});

const fetchTopics = () => dispatch =>
	TopicAPIUtil.fetchTopics().then(topics => {
		dispatch(receiveAllTopics(topics));
	});

const fetchTopic = id => dispatch =>
	TopicAPIUtil.fetchTopic(id).then(topic => {
		dispatch(receiveTopic(topic[id]));
	});
