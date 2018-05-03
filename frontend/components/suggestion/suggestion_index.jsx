import React from 'react';

class SuggestionIndex extends React.Component {
	componentDidMount() {
		this.props.fetchSuggestions();
	}

	render() {
		const { suggestions } = this.props;
		let title = <div className="show-title">Suggestions</div>;
		let list = (
			<ul className="suggestions">
				{suggestions.map(suggestion => (
					<li>
						<div className="comments">{suggestion.comments}</div>
					</li>
				))}
			</ul>
		);
		return (
			<div>
				{title}
				{list}
			</div>
		);
	}
}

export default SuggestionIndex;
