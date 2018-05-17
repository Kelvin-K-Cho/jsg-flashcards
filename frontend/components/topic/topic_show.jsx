import React from 'react';
import ReactMarkdown from 'react-markdown';
import sanitizeHTML from 'sanitize-html';
import Loader from '../loader/loader';
import { Container, Row, Col } from 'reactstrap';
import Card from '../miscellaneous/card';

import { checkCards } from '../../reducers/selectors';

class TopicShow extends React.Component {
	componentDidMount() {
		this.props.fetchTopic(this.props.match.params.topicId);
		this.props.fetchQuestionsByTopic(this.props.match.params.topicId);
		this.props.fetchAnswersByTopic(this.props.match.params.topicId);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.topicId !== this.props.match.params.topicId) {
			this.props.fetchTopic(this.props.match.params.topicId);
			this.props.fetchQuestionsByTopic(this.props.match.params.topicId);
			this.props.fetchAnswersByTopic(this.props.match.params.topicId);
		}
	}

	render() {
		const { topic, images, cards } = this.props;
		if (topic && checkCards(cards)) {
			let title = <div className="show-title">{topic.title}</div>;
			let notes = sanitizeHTML(topic.notes);
			let body = <ReactMarkdown className="topic-notes" source={notes} />;
			let list = (
				<Container>
					<Row className="top-card">
						<Col>Question</Col>
						<Col>Answer</Col>
					</Row>
					{cards.map(card => (
						<Card key={card[0].id} card={card} cardId={card[0].id} />
					))}
				</Container>
			);
			return (
				<div>
					{title}
					<div className="show-container">
						<div className="details-container">
							{body}
							{list}
						</div>
					</div>
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

export default TopicShow;
