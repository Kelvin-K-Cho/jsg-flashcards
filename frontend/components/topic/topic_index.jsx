import React from 'react';
import TopicIndexItem from './topic_index_item';

class TopicIndex extends React.Component {
	componentDidMount() {
		this.props.fetchTopics();
	}

	render() {
		let list = (
			<ul className="topics-list">
				{this.props.topics.map(topic => (
					<TopicIndexItem key={topic.id} topic={topic} topicId={topic.id} />
				))}
			</ul>
		);
		return list;
	}
}

export default TopicIndex;
