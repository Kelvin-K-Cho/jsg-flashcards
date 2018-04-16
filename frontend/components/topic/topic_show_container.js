import { connect } from 'react-redux';
import TopicShow from './topic_show';
import { fetchTopic } from '../../actions/topics';

const mapStateToProps = (state, ownProps) => ({
	topic: state.entities.topics[ownProps.match.params.topicId]
});

const mapDispatchToProps = dispatch => ({
	fetchTopic: topicId => dispatch(fetchTopic(topicId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
