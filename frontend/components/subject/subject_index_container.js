import { connect } from 'react-redux';
import SubjectIndex from './subject_index';
import { fetchSubjects } from '../../actions/subjects';
import { selectSubjects } from '../../reducers/selectors';

const mapStateToProps = state => ({
	subjects: selectSubjects(state)
});

const mapDispatchToProps = dispatch => ({
	fetchSubjects: () => dispatch(fetchSubjects())
});

const SubjectIndexContainer = connect(mapStateToProps, mapDispatchToProps)(
	SubjectIndex
);

export default SubjectIndexContainer;
