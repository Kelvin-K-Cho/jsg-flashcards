import * as TopicAPIUtil from '../utils/topics';

const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

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

const fetchTopicsBySubject = subjectId => dispatch =>
	TopicAPIUtil.fetchTopicsBySubject(subjectId).then(topics => {
		dispatch(receiveAllTopics(topics));
	});

const fetchTopicBySubject = (subjectId, id) => dispatch =>
	TopicAPIUtil.fetchTopicBySubject(subjectId, id).then(topic => {
		dispatch(receiveTopic(topic[id]));
	});

const fetchTopicsByWeek = weekId => dispatch =>
	TopicAPIUtil.fetchTopicsByWeek(weekId).then(topics => {
		dispatch(receiveAllTopics(topics));
	});

const fetchTopicByWeek = (weekId, id) => dispatch =>
	TopicAPIUtil.fetchTopicByWeek(weekId, id).then(topic => {
		dispatch(receiveTopic(topic[id]));
	});

export {
	RECEIVE_ALL_TOPICS,
	RECEIVE_TOPIC,
	fetchTopics,
	fetchTopic,
	fetchTopicsBySubject,
	fetchTopicBySubject,
	fetchTopicsByWeek,
	fetchTopicByWeek
};
