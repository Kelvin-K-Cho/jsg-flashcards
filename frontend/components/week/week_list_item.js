import React from 'react';
import { Link } from 'react-router-dom';

const WeekListItem = props => {
	const { weekId, week } = props;
	let item = (
		<li>
			<Link to={`/weeks/${weekId}`}>{week.title}</Link>
		</li>
	);
	return item;
};

export default WeekListItem;
