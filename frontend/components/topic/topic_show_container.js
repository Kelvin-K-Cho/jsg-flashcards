import { connect } from 'react-redux';
import TopicShow from './topic_show';
import { fetchTopic } from '../../actions/topics';
import { fetchQuestionsByTopic } from '../../actions/questions';
import { fetchAnswersByTopic } from '../../actions/answers';
import {
	selectQuestions,
	selectCorrectAnswers
} from '../../reducers/selectors';
import zip from 'lodash/zip';

const mapStateToProps = (state, ownProps) => ({
	topic: state.entities.topics[ownProps.match.params.topicId],
	cards: zip(selectQuestions(state), selectCorrectAnswers(state))
});

const mapDispatchToProps = dispatch => ({
	fetchTopic: topicId => dispatch(fetchTopic(topicId)),
	fetchQuestionsByTopic: topicId =>
		dispatch(fetchQuestionsByTopic(topicId)),
	fetchAnswersByTopic: topicId => dispatch(fetchAnswersByTopic(topicId))
});

const TopicShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	TopicShow
);

export default TopicShowContainer;
