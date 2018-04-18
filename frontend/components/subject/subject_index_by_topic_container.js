import { connect } from 'react-redux';
import SubjectIndexByTopic from './subject_index_by_topic';
import { fetchSubjectsByTopic } from '../../actions/subjects';
import { selectSubjects } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	topic: state.entities.topics[ownProps.match.params.topicId],
	subjects: selectSubjects(state)
});

const mapDispatchToProps = dispatch => ({
	fetchSubjectsByTopic: id => dispatch(fetchSubjectsByTopic(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(
	SubjectIndexByTopic
);
