import { connect } from 'react-redux';
import TopicShow from './topic_show';
import { fetchTopic } from '../../actions/topics';

const mapStateToProps = (state, ownProps) => ({
	topic: state.entities.topics[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
	fetchStation: id => dispatch(fetchTopic(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);
