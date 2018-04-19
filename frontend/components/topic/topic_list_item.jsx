import React from 'react';
import { Link } from 'react-router-dom';

const TopicListItem = props => {
	const { topicId, topic } = props;
	let item = (
		<li>
			<Link to={`/topics/${topicId}`}>{topic.title}</Link>
		</li>
	);
	return item;
};

export default TopicListItem;
