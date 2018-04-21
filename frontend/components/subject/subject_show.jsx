import React from 'react';
import Loader from '../loader/loader';
import { Container, Row, Col } from 'reactstrap';
import CardListItem from '../card/card_list_item';
import { checkCards } from '../../reducers/selectors';

class SubjectShow extends React.Component {
	componentDidMount() {
		this.props.fetchSubject(this.props.match.params.subjectId);
		this.props.fetchQuestionsBySubject(this.props.match.params.subjectId);
		this.props.fetchAnswersBySubject(this.props.match.params.subjectId);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.match.params.subjectId !== this.props.match.params.subjectId
		) {
			this.props.fetchSubject(this.props.match.params.subjectId);
			this.props.fetchQuestionsBySubject(this.props.match.params.subjectId);
			this.props.fetchAnswersBySubject(this.props.match.params.subjectId);
		}
	}

	render() {
		const { subject, cards } = this.props;
		if (subject && checkCards(cards)) {
			let title = <div className="subject-title">{subject.title}</div>;
			let notes = <div className="subject-notes">{subject.notes}</div>;
			let image = <img className="subject-image" src={subject.image_url} />;
			let list = (
				<Container>
					<Row className="top-card">
						<Col>Question</Col>
						<Col>Answer</Col>
					</Row>
					{cards.map(card => (
						<CardListItem key={card[0].id} card={card} cardId={card[0].id} />
					))}
				</Container>
			);
			return (
				<div>
					{title}
					<div className="subject-container">
						<div className="details-container">
							{notes}
							{list}
						</div>
						{image}
					</div>
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

export default SubjectShow;
