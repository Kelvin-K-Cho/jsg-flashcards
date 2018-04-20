import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const QuestionListItem = props => {
	const { questionId, question } = props;
	let item = <Col>{question}</Col>;
	return item;
};

export default QuestionListItem;
