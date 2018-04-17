import React from 'react';
import { Link } from 'react-router-dom';

const TopicIndexItem = props => {
	const { topicId, topic } = props;
	let item = (
		<li>
			<div>{topic.title}</div>
			<Link to={`/topics/${topicId}`}>
				<img className="topic-image" src={topic.image_url} />
			</Link>
		</li>
	);
	return item;
};

export default TopicIndexItem;
