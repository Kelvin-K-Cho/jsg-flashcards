import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import SubjectIndexItem from '../subject/subject_index_item';
import Loader from '../loader/loader';

class TopicShow extends React.Component {
	componentDidMount() {
		this.props
			.fetchTopic(this.props.match.params.topicId)
			.then(this.props.fetchSubjectsByTopic(this.props.match.params.topicId));
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.topicId !== this.props.match.params.topicId) {
			this.props
				.fetchTopic(this.props.match.params.topicId)
				.then(this.props.fetchSubjectsByTopic(this.props.match.params.topicId));
		}
	}

	render() {
		const { topic, subjects } = this.props;
		if (!topic) {
			return <Loader />;
		} else {
			let title = <div className="topic-title">{topic.title}</div>;
			let text = <div className="studyset-header">List of Study Sets:</div>;
			let list = (
				<Nav vertical className="subject-list">
					{this.props.subjects.map(subject => (
						<NavItem className="subject-item" key={subject.id}>
							<SubjectIndexItem subject={subject} subjectId={subject.id} />
						</NavItem>
					))}
				</Nav>
			);
			let image = <img className="topic-image" src={topic.image_url} />;
			return (
				<div>
					{title}
					<div className="topic-container">
						<div className="topics-list">
							{text}
							{list}
						</div>
						{image}
					</div>
				</div>
			);
		}
	}
}

export default TopicShow;
