import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const AnswerListItem = props => {
	const { answerId, answer } = props;
	let item = <Col>{answer}</Col>;
	return item;
};

export default AnswerListItem;
