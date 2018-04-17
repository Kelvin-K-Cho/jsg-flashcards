import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';

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
			let list = <ul className="cards-list">placeholder</ul>;
			return (
				<div>
					{title}
					{text}
				</div>
			);
		}
	}
}

export default TopicShow;
