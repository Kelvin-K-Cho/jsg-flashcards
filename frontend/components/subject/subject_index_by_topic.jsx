import React from 'react';
import Loader from '../loader/loader';

class SubjectIndexByTopic extends React.Component {
	componentDidMount() {
		debugger; //eslint-disable-line no-debugger
		this.props.fetchSubjectsByTopic(this.props.topic.id);
	}

	render() {
		const { subjects } = this.props;
		if (!subjects) {
			return <Loader />;
		}
		let list = <ul className="subjects-by-topic-list">Placeholder</ul>;
		return list;
	}
}

export default SubjectIndexByTopic;
