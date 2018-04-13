import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
	const { currentUser, path, logout } = props;
	let display;
	let logo = (
		<Link to="/">
			<img src={window.staticImages.home} />
		</Link>
	);
	if (currentUser) {
		display = (
			<div id="container-nav">
				<Link id="link-logo" to="/">
					<img src={window.staticImages.home} />
				</Link>
				<Link to={'/'}>
					<button id="button-logout" onClick={logout}>
						Logout
					</button>
				</Link>
			</div>
		);
	} else {
		let link;
		if (path === '/signup') {
			link = (
				<Link id="button-login" to={'/login'}>
					Log In
				</Link>
			);
		} else if (path === '/login') {
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

	if (!currentUser) {
		return (
			<header className="nav-bar">
				{logo}
				{display}
			</header>
		);
	} else {
		return <header className="nav-bar">{display}</header>;
	}
};

export default Navbar;
