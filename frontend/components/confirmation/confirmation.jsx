import React from 'react';
import { withRouter } from 'react-router-dom';

class Confirmation extends React.Component {
	componentDidMount() {
		window.setTimeout(() => {
			this.props.history.go(-2);
		}, 1250);
	}

	render() {
		const body = (
			<div className="main">
				<h1>Thank you for your suggestion!</h1>
				<h2>You are being redirected...</h2>
			</div>
		);
		return body;
	}
}

export default withRouter(Confirmation);
