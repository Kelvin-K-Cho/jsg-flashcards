import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import Item from '../miscellaneous/item';
import Loader from '../loader/loader';

class SubjectShow extends React.Component {
	componentDidMount() {
		this.props.fetchSubject(this.props.match.params.subjectId);
		this.props.fetchTopicsBySubject(this.props.match.params.subjectId);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.subjectId !== this.props.match.params.subjectId) {
			this.props.fetchSubject(this.props.match.params.subjectId);
			this.props.fetchTopicsBySubject(this.props.match.params.subjectId);
		}
	}

	render() {
		const { subject, topics } = this.props;
		if (subject && topics) {
			let title = <div className="show-title">{subject.title}</div>;
			let text = <div className="studyset-header">List of Study Sets:</div>;
			let list = (
				<Nav vertical>
					{topics.map(topic => (
						<NavItem className="show-item" key={topic.id}>
							<Item item={topic} itemId={topic.id} path={'topics'} />
						</NavItem>
					))}
				</Nav>
			);
			let image = <img className="subject-image" src={subject.image_url} />;
			return (
				<div>
					{title}
					<div className="show-container">
						<div className="studyset-list">
							{text}
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
