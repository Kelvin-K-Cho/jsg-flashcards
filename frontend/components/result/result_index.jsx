import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import Item from '../miscellaneous/item';
import ResultIndexItem from './result_index_item';

class ResultIndex extends React.Component {
	componentDidMount() {
		const value = this.props.location.search.slice(2);
		this.props.fetchResults(value);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.location.search.slice(2) !== this.props.location.search.slice(2)
		) {
			const value = this.props.location.search.slice(2);
			this.props.fetchResults(value);
		}
	}

	render() {
		const { results } = this.props;
		let title = <div className="result-title">Results</div>;
		let text = <div className="studyset-header">List of Study Sets:</div>;
		let list = <div id="found-nothing">No matches found!</div>;
		if (results.length) {
			list = (
				<Nav vertical>
					{results.map(result => (
						<NavItem className="show-item" key={result.id}>
							<Item item={result} itemId={result.id} path={'subjects'} />
						</NavItem>
					))}
				</Nav>
			);
		}
		return (
			<div>
				{title}
				<div className="result-container">
					<div className="studyset-list">
						{text}
						{list}
					</div>
				</div>
			</div>
		);
	}
}

export default ResultIndex;
