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
import { Link } from 'react-router-dom';
import TopicListItem from '../topic/topic_list_item';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	componentDidMount() {
		this.props.fetchTopics();
	}

	render() {
		const { currentUser, path, logout } = this.props;
		let logo = (
			<NavbarBrand id="logo" href="/#">
				<img src={window.staticImages.home} />
			</NavbarBrand>
		);
		let topics = (
			<Dropdown
				group
				isOpen={this.state.dropdownOpen}
				toggle={this.toggle}
				size="sm"
			>
				<DropdownToggle caret>Topics</DropdownToggle>
				<DropdownMenu>
					{this.props.topics.map(topic => (
						<DropdownItem key={topic.id}>
							<TopicListItem key={topic.id} topic={topic} topicId={topic.id} />
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
		if (currentUser) {
			link = (
				<NavLink href="#/">
					<Button outline size="sm" onClick={logout}>
						Logout
					</Button>
				</NavLink>
			);
			index = (
				<div className="navigation-container">
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
