import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

const SubjectIndexItem = props => {
	const { subjectId, subject } = props;
	let item = (
		<NavLink tag={Link} to={`/subjects/${subjectId}`}>
			{subject.title}
		</NavLink>
	);
	return item;
};

export default SubjectIndexItem;
