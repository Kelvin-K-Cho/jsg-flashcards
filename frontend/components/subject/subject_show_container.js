import { connect } from 'react-redux';
import SubjectShow from './subject_show';
import { fetchSubject } from '../../actions/subjects';
import { fetchQuestionsBySubject } from '../../actions/questions';
import { fetchAnswersBySubject } from '../../actions/answers';
import {
	selectQuestions,
	selectCorrectAnswers
} from '../../reducers/selectors';
import zip from 'lodash/zip';

const mapStateToProps = (state, ownProps) => ({
	subject: state.entities.subjects[ownProps.match.params.subjectId],
	cards: zip(selectQuestions(state), selectCorrectAnswers(state))
});

const mapDispatchToProps = dispatch => ({
	fetchSubject: subjectId => dispatch(fetchSubject(subjectId)),
	fetchQuestionsBySubject: subjectId =>
		dispatch(fetchQuestionsBySubject(subjectId)),
	fetchAnswersBySubject: subjectId => dispatch(fetchAnswersBySubject(subjectId))
});

const SubjectShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	SubjectShow
);

export default SubjectShowContainer;
