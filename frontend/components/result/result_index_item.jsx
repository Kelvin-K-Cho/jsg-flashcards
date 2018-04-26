import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

const ResultIndexItem = props => {
	const { resultId, result } = props;
	let item = (
		<NavLink tag={Link} to={`/subjects/${resultId}`}>
			{result.title}
		</NavLink>
	);
	return item;
};

export default ResultIndexItem;
