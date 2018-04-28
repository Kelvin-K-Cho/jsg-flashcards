import React from 'react';
import SubjectIndexItem from './subject_index_item';

class SubjectIndex extends React.Component {
	componentDidMount() {
		this.props.fetchSubjects();
	}

	render() {
		let list = (
			<ul className="subjects-grid">
				{this.props.subjects.map(subject => (
					<SubjectIndexItem
						key={subject.id}
						subject={subject}
						subjectId={subject.id}
					/>
				))}
			</ul>
		);
		return list;
	}
}

export default SubjectIndex;
