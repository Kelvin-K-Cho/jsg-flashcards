import { connect } from 'react-redux';
import TopicIndex from './topic_index';
import { fetchTopics } from '../../actions/topics';
import { selectTopics } from '../../reducers/selectors';

const mapStateToProps = state => ({
	topics: selectTopics(state)
});

const mapDispatchToProps = dispatch => ({
	fetchTopics: () => dispatch(fetchTopics())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicIndex);
