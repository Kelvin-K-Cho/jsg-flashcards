import React from 'react';
import { Link } from 'react-router-dom';

const TopicIndexItem = props => {
	const { topicId, topic } = props;
	let item = (
		<li>
			<Link to={`/topics/${topicId}`}>
				<img className="image-topic" src={topic.image_url} />
			</Link>
			<div className="text-topic">{topic.title}</div>
		</li>
	);
	return item;
};

export default TopicIndexItem;
