import { connect } from 'react-redux';
import SubjectShow from './subject_show';
import { fetchSubject } from '../../actions/subjects';

const mapStateToProps = (state, ownProps) => ({
	subject: state.entities.subjects[ownProps.match.params.subjectId]
});

const mapDispatchToProps = dispatch => ({
	fetchSubject: subjectId => dispatch(fetchSubject(subjectId))
});

const SubjectShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	SubjectShow
);

export default SubjectShowContainer;
