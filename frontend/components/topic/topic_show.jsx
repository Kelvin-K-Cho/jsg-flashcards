import React from 'react';
import { Link } from 'react-router-dom';

class TopicShow extends React.Component {
	componentDidMount() {
		this.props.fetchTopic(this.props.match.params.topicId);
	}

	render() {
		const { topic } = this.props;
		console.log(topic);

		let title = <div>hello</div>;

		return title;
	}
}

export default TopicShow;
