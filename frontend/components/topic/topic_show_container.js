import { connect } from 'react-redux';
import TopicShow from './topic_show';
import { fetchTopic } from '../../actions/topics';
import { fetchQuestionsByTopic } from '../../actions/questions';
import { fetchAnswersByTopic } from '../../actions/answers';
import { fetchImagesByTopic } from '../../actions/images';
import {
	selectImages,
	selectQuestions,
	selectCorrectAnswers
} from '../../reducers/selectors';
import zip from 'lodash/zip';

const mapStateToProps = (state, ownProps) => ({
	topic: state.entities.topics[ownProps.match.params.topicId],
	images: selectImages(state),
	cards: zip(selectQuestions(state), selectCorrectAnswers(state))
});

const mapDispatchToProps = dispatch => ({
	fetchTopic: topicId => dispatch(fetchTopic(topicId)),
	fetchImagesByTopic: topicId => dispatch(fetchImagesByTopic(topicId)),
	fetchQuestionsByTopic: topicId => dispatch(fetchQuestionsByTopic(topicId)),
	fetchAnswersByTopic: topicId => dispatch(fetchAnswersByTopic(topicId))
});

const TopicShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	TopicShow
);

export default TopicShowContainer;
