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
			<Form>
				<FormGroup>
					<Input
						type="text"
						name="search"
						id="search"
						value={this.state.value}
						onChange={this.handleInput('value')}
						placeholder="Search By Subject"
					/>
				</FormGroup>

				<Button onClick={this.handleSubmit} />
			</Form>
		);
	}
}

export default Search;
