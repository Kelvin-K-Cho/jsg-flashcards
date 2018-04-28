import React from 'react';
import Loader from '../loader/loader';
import { Container, Row, Col } from 'reactstrap';
import Card from '../miscellaneous/card';
import Image from '../miscellaneous/image';
import { checkCards } from '../../reducers/selectors';

class TopicShow extends React.Component {
	componentDidMount() {
		this.props.fetchTopic(this.props.match.params.topicId);
		this.props.fetchQuestionsByTopic(this.props.match.params.topicId);
		this.props.fetchAnswersByTopic(this.props.match.params.topicId);
		this.props.fetchImagesByTopic(this.props.match.params.topicId);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.topicId !== this.props.match.params.topicId) {
			this.props.fetchTopic(this.props.match.params.topicId);
			this.props.fetchQuestionsByTopic(this.props.match.params.topicId);
			this.props.fetchAnswersByTopic(this.props.match.params.topicId);
			this.props.fetchImagesByTopic(this.props.match.params.topicId);
		}
	}

	render() {
		const { topic, images, cards } = this.props;
		if (topic && checkCards(cards)) {
			let title = <div className="show-title">{topic.title}</div>;
			let notes = <div>{topic.notes}</div>;
			let visuals = (
				<ul className="images-list" id="topic-images">
					{images.map(image => <Image key={image.id} image={image} />)}
				</ul>
			);
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
							{notes}
							{list}
						</div>
						{visuals}
					</div>
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

export default TopicShow;
