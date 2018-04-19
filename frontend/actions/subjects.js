import * as SubjectAPIUtil from '../utils/subjects';

const RECEIVE_ALL_SUBJECTS = 'RECEIVE_ALL_SUBJECTS';
const RECEIVE_SUBJECT = 'RECEIVE_SUBJECT';

const receiveAllSubjects = subjects => ({
	type: RECEIVE_ALL_SUBJECTS,
	subjects
});

const receiveSubject = subject => ({
	type: RECEIVE_SUBJECT,
	subject
});

const fetchSubjects = () => dispatch =>
	SubjectAPIUtil.fetchSubjects().then(subjects => {
		dispatch(receiveAllSubjects(subjects));
	});

const fetchSubject = id => dispatch =>
	SubjectAPIUtil.fetchSubject(id).then(subject => {
		dispatch(receiveSubject(subject[id]));
	});

const fetchSubjectsByTopic = topicId => dispatch =>
	SubjectAPIUtil.fetchSubjectsByTopic(topicId).then(subjects => {
		dispatch(receiveAllSubjects(subjects));
	});

const fetchSubjectByTopic = (topicId, id) => dispatch =>
	SubjectAPIUtil.fetchSubjectByTopic(topicId, id).then(subject => {
		dispatch(receiveSubject(subject[id]));
	});

export {
	RECEIVE_ALL_SUBJECTS,
	RECEIVE_SUBJECT,
	fetchSubjects,
	fetchSubject,
	fetchSubjectsByTopic,
	fetchSubjectByTopic
};
