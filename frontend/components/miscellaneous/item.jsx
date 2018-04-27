import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

const Item = props => {
	const { itemId, item, path } = props;
	let element = (
		<NavLink tag={Link} to={`/subjects/${itemId}`}>
			{item.title}
		</NavLink>
	);
	return element;
};

export default Item;
