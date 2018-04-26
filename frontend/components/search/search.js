import React from 'react';
import { Form, FormGroup, Input, FormText, Button } from 'reactstrap';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(type) {
		return e => {
			this.setState({
				[type]: e.target.value
			});
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.fetchResults(this.state)
			.then(value => this.props.history.push(`/results?value=${value}`));
	}

	render() {
		return (
			<Form className="search-form">
				<FormGroup>
					<Input
						bsSize="sm"
						type="text"
						name="search"
						id="search-bar"
						value={this.state.value}
						onChange={this.handleInput('value')}
						placeholder="Search By Subject"
					/>
				</FormGroup>

				<Button id="search-button" onClick={this.handleSubmit} size="sm">
					<img src={window.staticImages.search} />
				</Button>
			</Form>
		);
	}
}

export default Search;
