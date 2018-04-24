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
import WeekListItem from '../week/week_list_item';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.toggleTopics = this.toggleTopics.bind(this);
		this.toggleWeeks = this.toggleWeeks.bind(this);
		this.state = {
			topicsAreOpen: false,
			weeksAreOpen: false
		};
	}

	toggleTopics() {
		this.setState({
			topicsAreOpen: !this.state.topicsAreOpen
		});
	}

	toggleWeeks() {
		this.setState({
			weeksAreOpen: !this.state.weeksAreOpen
		});
	}

	componentDidMount() {
		this.props.fetchTopics();
		this.props.fetchWeeks();
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
				isOpen={this.state.topicsAreOpen}
				toggle={this.toggleTopics}
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
							<WeekListItem key={week.id} week={week} weekId={week.id} />
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
					{weeks}
				</div>
			);
		} else {
			if (path === '/signup') {
				link = login;
			} else if (path === '/login') {
				link = signup;
			} else {
				link = (
					<div className="navigation-container">
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
