import React from 'react';
import { Link } from 'react-router-dom';

const SubjectIndexItem = props => {
	const { subjectId, subject } = props;
	let item = (
		<li>
			<div className="subject-name">{subject.title}</div>
			<Link to={`/subjects/${subjectId}`}>
				<img className="subject-image" src={subject.images[0]} />
			</Link>
		</li>
	);
	return item;
};

export default SubjectIndexItem;
