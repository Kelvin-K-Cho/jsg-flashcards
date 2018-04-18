import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import SubjectIndexByTopic from '../subject/subject_index_by_topic';

class TopicShow extends React.Component {
	componentDidMount() {
		this.props.fetchTopic(this.props.match.params.topicId);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.topicId !== nextProps.match.params.topicId) {
			this.props.fetchTopic(nextProps.match.params.topicId);
		}
	}

	render() {
		const { topic } = this.props;
		if (!topic) {
			return <Loader />;
		} else {
			let title = <div className="topic-title">{topic.title}</div>;
			let text = <div className="studyset-header">List of Study Sets:</div>;
			let list = <SubjectIndexByTopic />;
			return (
				<div>
					{title}
					{text}
					<SubjectIndexByTopic key={topic.id} topic={topic} topicId={topic.id}>
						Placeholder
					</SubjectIndexByTopic>
				</div>
			);
		}
	}
}

export default TopicShow;
