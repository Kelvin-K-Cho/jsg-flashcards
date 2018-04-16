import React from 'react';
import { Link } from 'react-router-dom';
import TopicIndexItem from './topic_index_item';

class TopicIndex extends React.Component {
	componentDidMount() {
		this.props.fetchTopics();
	}

	render() {
		let list = (
			<section>
				<ul className="topics-list">
					{this.props.topics.map(topic => (
						<TopicIndexItem key={topic.id} topic={topic} topicId={topic.id} />
					))}
				</ul>
			</section>
		);
		return list;
	}
}

export default TopicIndex;
