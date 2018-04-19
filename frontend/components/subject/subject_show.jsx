import React from 'react';
import Loader from '../loader/loader';
import { Container, Row, Col } from 'reactstrap';

class SubjectShow extends React.Component {
	componentDidMount() {
		this.props
			.fetchSubject(this.props.match.params.subjectId)
			.then(
				this.props
					.fetchQuestionsBySubject(this.props.match.params.subjectId)
					.then(
						this.props.fetchAnswersBySubject(this.props.match.params.subjectId)
					)
			);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.match.params.subjectId !== this.props.match.params.subjectId
		) {
			this.props
				.fetchSubject(this.props.match.params.subjectId)
				.then(
					this.props
						.fetchQuestionsBySubject(this.props.match.params.subjectId)
						.then(
							this.props.fetchAnswersBySubject(
								this.props.match.params.subjectId
							)
						)
				);
		}
	}

	render() {
		const { subject, questionsAndAnswers } = this.props;
		if (!subject) {
			return <Loader />;
		} else {
			let title = <div className="subject-title">{subject.title}</div>;
			let notes = <div className="subject-notes">{subject.notes}</div>;
			let cards = (
				<Container>
					<Row>
						<Col>Hello</Col>
						<Col>World!</Col>
					</Row>
				</Container>
			);
			return (
				<div>
					{title}
					{notes}
					{cards}
				</div>
			);
		}
	}
}

export default SubjectShow;
