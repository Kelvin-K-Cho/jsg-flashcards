import React from 'react';
import { Link } from 'react-router-dom';

const Bullet = props => {
	const { bulletId, bullet, path } = props;
	let element = (
		<li>
			<Link to={`/${path}/${bulletId}`}>{bullet.title}</Link>
		</li>
	);
	return element;
};

export default Bullet;
