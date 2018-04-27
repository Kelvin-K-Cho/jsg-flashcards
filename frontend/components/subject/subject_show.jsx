import React from 'react';
import Loader from '../loader/loader';
import { Container, Row, Col } from 'reactstrap';
import Card from '../miscellaneous/card';
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
			let title = <div className="show-title">{subject.title}</div>;
			let notes = <div>{subject.notes}</div>;
			let image = <img className="subject-image" src={subject.image_url} />;
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
