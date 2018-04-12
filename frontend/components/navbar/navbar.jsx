import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	/*

	The following code is implicit.

	constructor(props){
    super(props);
  }

	*/

	render() {
		let display;
		let logo = <Link to="/" />;
		if (this.props.currentUser) {
			display = (
				<div id="container-nav">
					<Link id="link-logo" to="/">
						<h1 id="text-logo">JSG Flashcards</h1>
					</Link>
					<Link to={'/'}>
						<button id="button-logout" onClick={this.props.logout}>
							Logout
						</button>
					</Link>
				</div>
			);
		} else {
			let link;
			if (this.props.path === '/signup') {
				link = (
					<Link id="button-login" to={'/login'}>
						Log In
					</Link>
				);
			} else if (this.props.path === '/login') {
				link = (
					<Link id="button-signup" to={'/signup'}>
						Sign Up
					</Link>
				);
			} else {
				link = (
					<div>
						<Link id="button-signup" to="/signup">
							Sign Up
						</Link>
						<Link id="button-login" to="/login">
							Log In
						</Link>
					</div>
				);
			}
			display = link;
		}

		if (!this.props.currentUser) {
			return (
				<header className="nav-bar">
					{logo}
					<div>{display}</div>
				</header>
			);
		} else {
			return (
				<header className="nav-bar">
					<div>{display}</div>
				</header>
			);
		}
	}
}

export default Navbar;
