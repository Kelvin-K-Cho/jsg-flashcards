import React from 'react';

const Image = props => {
	const { image } = props;
	let visual = (
		<li>
			<img className="image" src={image.url} />
		</li>
	);
	return visual;
};

export default Image;
