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
		let topics = (
			<NavLink href="#topics">
				<Button outline size="sm">
					Topics
				</Button>
			</NavLink>
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
		let index = logo;
		if (currentUser) {
			link = (
				<NavLink href="#/">
					<Button outline size="sm" onClick={logout}>
						Logout
					</Button>
				</NavLink>
			);
			index = (
				<div>
					{logo}
					{topics}
				</div>
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
				{index}
				{link}
			</Navbar>
		);

		return display;
	}
}

export default NavBar;
