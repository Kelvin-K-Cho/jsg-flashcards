import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	handleInput(type) {
		return event => {
			this.setState({ [type]: event.target.value });
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.login(this.state).then(() => this.props.history.push('/topics'));
	}

	handleDemo(event) {
		event.preventDefault();
		const demo = { username: 'demo', password: 'secret' };
		this.props.login(demo).then(() => this.props.history.push('/topics'));
	}

	render() {
		return (
			<div className="div-session">
				<h1>Hit the ground running</h1>
				<form className="form-session">
					<label id="username-session">
						<input
							type="text"
							value={this.state.username}
							onChange={this.handleInput('username')}
							placeholder="Username"
						/>
					</label>

					<label id="password-session">
						<input
							type="password"
							value={this.state.password}
							onChange={this.handleInput('password')}
							placeholder="Password"
						/>
					</label>
					<Button onClick={this.handleSubmit}>Log In</Button>
					<button id="button-demo" onClick={this.handleDemo}>
						Demo User
					</button>
				</form>
				<div id="check-account">
					Don't have an account? &nbsp;<Link id="link-session" to="/signup">
						Sign Up
					</Link>
				</div>
			</div>
		);
	}
}

export default Login;
