import { connect } from 'react-redux';
import SubjectShow from './subject_show';
import { fetchSubject } from '../../actions/subjects';
import { fetchTopicsBySubject } from '../../actions/topics';
import { fetchImagesBySubject } from '../../actions/images';
import { selectImages, selectTopics } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	subject: state.entities.subjects[ownProps.match.params.subjectId],
	images: selectImages(state),
	topics: selectTopics(state)
});

const mapDispatchToProps = dispatch => ({
	fetchSubject: subjectId => dispatch(fetchSubject(subjectId)),
	fetchImagesBySubject: subjectId => dispatch(fetchImagesBySubject(subjectId)),
	fetchTopicsBySubject: subjectId => dispatch(fetchTopicsBySubject(subjectId))
});

const SubjectShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	SubjectShow
);

export default SubjectShowContainer;
