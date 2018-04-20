import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import QuestionListItem from '../question/question_list_item';
import AnswerListItem from '../answer/answer_list_item';
import Loader from '../loader/loader';

const CardListItem = props => {
	const { cardId, card } = props;
	if (card[0] && card[1]) {
		let item = (
			<Row>
				<QuestionListItem
					key={card[0].id}
					question={card[0].sentence}
					questionId={card[0].id}
				/>
				<AnswerListItem
					key={-card[1].id}
					answer={card[1].sentence}
					answerId={-card[1].id}
				/>
			</Row>
		);
		return item;
	} else {
		return <Loader />;
	}
};

export default CardListItem;
