import { connect } from 'react-redux';
import TopicShow from './topic_show';
import { fetchTopic } from '../../actions/topics';
import { fetchSubjectsByTopic } from '../../actions/subjects';
import { selectSubjects } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	topic: state.entities.topics[ownProps.match.params.topicId],
	subjects: selectSubjects(state)
});

const mapDispatchToProps = dispatch => ({
	fetchTopic: topicId => dispatch(fetchTopic(topicId)),
	fetchSubjectsByTopic: topicId => dispatch(fetchSubjectsByTopic(topicId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
