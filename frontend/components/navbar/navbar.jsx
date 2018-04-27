import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button
} from 'reactstrap';
import SearchContainer from '../search/search_container';
import { Link } from 'react-router-dom';
import Bullet from '../miscellaneous/bullet';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.toggleSubjects = this.toggleSubjects.bind(this);
		this.toggleWeeks = this.toggleWeeks.bind(this);
		this.state = {
			subjectsAreOpen: false,
			weeksAreOpen: false
		};
	}

	toggleSubjects() {
		this.setState({
			subjectsAreOpen: !this.state.subjectsAreOpen
		});
	}

	toggleWeeks() {
		this.setState({
			weeksAreOpen: !this.state.weeksAreOpen
		});
	}

	componentDidMount() {
		this.props.fetchSubjects();
		this.props.fetchWeeks();
	}

	render() {
		const { currentUser, path, logout } = this.props;
		let logo = (
			<NavbarBrand id="logo" href="/#">
				<img src={window.staticImages.home} />
			</NavbarBrand>
		);
		let subjects = (
			<Dropdown
				group
				isOpen={this.state.subjectsAreOpen}
				toggle={this.toggleSubjects}
				size="sm"
			>
				<DropdownToggle caret>Subjects</DropdownToggle>
				<DropdownMenu>
					{this.props.subjects.map(subject => (
						<DropdownItem key={subject.id}>
							<Bullet
								key={subject.id}
								bullet={subject}
								bulletId={subject.id}
								path={'subjects'}
							/>
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		);

		let weeks = (
			<Dropdown
				group
				isOpen={this.state.weeksAreOpen}
				toggle={this.toggleWeeks}
				size="sm"
			>
				<DropdownToggle caret>Weeks</DropdownToggle>
				<DropdownMenu className="weeks-list">
					{this.props.weeks.map(week => (
						<DropdownItem key={week.id}>
							<Bullet
								key={week.id}
								bullet={week}
								bulletId={week.id}
								path={'weeks'}
							/>
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
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
		let search;
		if (currentUser) {
			link = (
				<NavLink href="#/">
					<Button outline size="sm" onClick={logout}>
						Logout
					</Button>
				</NavLink>
			);
			index = (
				<div className="nav-container" id="left-nav-container">
					{logo}
					{subjects}
					{weeks}
				</div>
			);
			search = <SearchContainer />;
		} else {
			if (path === '/signup') {
				link = login;
			} else if (path === '/login') {
				link = signup;
			} else {
				link = (
					<div className="nav-container" id="right-nav-container">
						{login}
						{signup}
					</div>
				);
			}
		}

		let display = (
			<Navbar>
				{index}
				{search}
				{link}
			</Navbar>
		);

		return display;
	}
}

export default NavBar;
