import { connect } from 'react-redux';
import SubjectShow from './subject_show';
import { fetchSubject } from '../../actions/subjects';
import { fetchQuestionsBySubject } from '../../actions/questions';
import { fetchAnswersByQuestion } from '../../actions/answers';
import { selectQuestions, selectAnswers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	subject: state.entities.subjects[ownProps.match.params.subjectId],
	questions: selectQuestions(state),
	answers: selectAnswers(state)
});

const mapDispatchToProps = dispatch => ({
	fetchSubject: subjectId => dispatch(fetchSubject(subjectId)),
	fetchQuestionsBySubject: subjectId =>
		dispatch(fetchQuestionsBySubject(subjectId)),
	fetchAnswersByQuestion: questionId =>
		dispatch(fetchAnswersByQuestion(questionId))
});

const SubjectShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	SubjectShow
);

export default SubjectShowContainer;
