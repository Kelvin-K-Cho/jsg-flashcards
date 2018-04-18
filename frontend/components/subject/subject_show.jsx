import React from 'react';
import Loader from '../loader/loader';

class SubjectShow extends React.Component {
	componentDidMount() {
		this.props.fetchSubject(this.props.match.params.subjectId);
	}

	componentWillReceiveProps(nextProps) {
		if (
			this.props.match.params.subjectId !== nextProps.match.params.subjectId
		) {
			this.props.fetchSubject(nextProps.match.params.subjectId);
		}
	}

	render() {
		const { subject } = this.props;
		if (!subject) {
			return <Loader />;
		} else {
			let title = <div className="subject-title">{subject.title}</div>;
			let notes = <div className="subject-notes">{subject.notes}</div>;
			return (
				<div>
					{title}
					{notes}
				</div>
			);
		}
	}
}

export default SubjectShow;
