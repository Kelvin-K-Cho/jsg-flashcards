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
		return event => {
			this.setState({
				[type]: event.target.value
			});
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.history.push(`/results?=${this.state.value}`);
	}

	render() {
		return (
			<Form id="search-form" onSubmit={this.handleSubmit}>
				<FormGroup>
					<Input
						bsSize="sm"
						type="text"
						name="search"
						id="search-bar"
						value={this.state.value}
						onChange={this.handleInput('value')}
						placeholder="Search by Topic"
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
