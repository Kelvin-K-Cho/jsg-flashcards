import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const Side = props => {
	const { sideId, side } = props;
	let item = <Col>{side}</Col>;
	return item;
};

export default Side;
