import React from 'react';
import { Link } from 'react-router-dom';

const SubjectIndexItem = props => {
	const { subjectId, subject } = props;
	let item = (
		<li>
			<div>{subject.title}</div>
			<Link to={`/subjects/${subjectId}`}>
				<img className="subject-image" src={subject.image_url} />
			</Link>
		</li>
	);
	return item;
};

export default SubjectIndexItem;
