import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import QuestionListItem from '../question/question_list_item';
import AnswerListItem from '../answer/answer_list_item';
import Side from './side';
import Loader from '../loader/loader';

const Card = props => {
	const { cardId, card } = props;
	if (card[0] && card[1]) {
		let item = (
			<Row>
				<Side key={card[0].id} side={card[0].sentence} sideId={card[0].id} />
				<Side key={-card[1].id} side={card[1].sentence} sideId={-card[1].id} />
			</Row>
		);
		return item;
	} else {
		return <Loader />;
	}
};

export default Card;
