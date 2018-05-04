import React from 'react';
import { Button, Form, FormGroup, Label, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class SuggestionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleInput(type) {
		return event => {
			this.setState({ [type]: event.target.value });
		};
	}

	handleCancel(event) {
		event.preventDefault();
		this.setState({
			comments: ''
		});
		this.props.history.goBack();
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props
			.createSuggestion(this.state)
			.then(() => this.props.history.push('/confirmation'));
	}

	render() {
		return (
			<div className="main" id="suggestion">
				<h2>Suggestion:</h2>
				<div className="form-container" id="suggestion-container">
					<Form>
						<FormGroup>
							<Label>
								<textarea
									type="text"
									name="comments"
									value={this.state.comments}
									onChange={this.handleInput('comments')}
								/>
							</Label>
						</FormGroup>
						<div className="form-buttons" id="suggestion-buttons">
							<Button onClick={this.handleCancel}>Cancel</Button>
							<Button onClick={this.handleSubmit}>Submit</Button>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

export default withRouter(SuggestionForm);
