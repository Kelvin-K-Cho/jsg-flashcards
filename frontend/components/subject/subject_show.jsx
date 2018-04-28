import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import Item from '../miscellaneous/item';
import Image from '../miscellaneous/image';
import Loader from '../loader/loader';

class SubjectShow extends React.Component {
	componentDidMount() {
		this.props.fetchSubject(this.props.match.params.subjectId);
		this.props.fetchTopicsBySubject(this.props.match.params.subjectId);
		this.props.fetchImagesBySubject(this.props.match.params.subjectId);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.match.params.subjectId !== this.props.match.params.subjectId
		) {
			this.props.fetchSubject(this.props.match.params.subjectId);
			this.props.fetchTopicsBySubject(this.props.match.params.subjectId);
			this.props.fetchImagesBySubject(this.props.match.params.subjectId);
		}
	}

	render() {
		const { subject, topics, images } = this.props;
		if (subject && topics) {
			let title = <div className="show-title">{subject.title}</div>;
			let text = <div className="studyset-header">List of Study Sets:</div>;
			let visuals = (
				<ul className="images-list" id="subject-images">
					{images.map(image => <Image key={image.id} image={image} />)}
				</ul>
			);
			let list = (
				<Nav vertical>
					{topics.map(topic => (
						<NavItem className="show-item" key={topic.id}>
							<Item item={topic} itemId={topic.id} path={'topics'} />
						</NavItem>
					))}
				</Nav>
			);
			return (
				<div>
					{title}
					<div className="show-container">
						<div className="studyset-list">
							{text}
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

export default SubjectShow;
