import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
	render() {
		const { currentUser, path, logout } = this.props;
		let logo = (
			<NavbarBrand id="logo" href="/#">
				<img src={window.staticImages.home} />
			</NavbarBrand>
		);
		let login = (
			<NavLink href="#/login">
				<Button outline size="sm">
					Log In
				</Button>
			</NavLink>
		);
		let signup = (
			<NavLink href="#/signup">
				<Button outline size="sm">
					Sign Up
				</Button>
			</NavLink>
		);
		let link;
		if (currentUser) {
			link = (
				<NavLink to={'/'}>
					<Button outline size="sm" onClick={logout}>
						Logout
					</Button>
				</NavLink>
			);
		} else {
			if (path === '/signup') {
				link = login;
			} else if (path === '/login') {
				link = signup;
			} else {
				link = (
					<div>
						{login}
						{signup}
					</div>
				);
			}
		}

		let display = (
			<Navbar>
				{logo}
				{link}
			</Navbar>
		);

		return display;
	}
}

export default NavBar;
