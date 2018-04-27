import { connect } from 'react-redux';
import SubjectShow from './subject_show';
import { fetchSubject } from '../../actions/subjects';
import { fetchTopicsBySubject } from '../../actions/topics';
import { selectTopics } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	subject: state.entities.subjects[ownProps.match.params.subjectId],
	topics: selectTopics(state)
});

const mapDispatchToProps = dispatch => ({
	fetchSubject: subjectId => dispatch(fetchSubject(subjectId)),
	fetchTopicsBySubject: subjectId => dispatch(fetchTopicsBySubject(subjectId))
});

const SubjectShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	SubjectShow
);

export default SubjectShowContainer;
