import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Loader from '../loader/loader';
import Bullet from '../miscellaneous/bullet';

class WeekShow extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: 'Day 1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	componentDidMount() {
		this.props.fetchWeek(this.props.match.params.weekId);
		this.props.fetchDaysByWeek(this.props.match.params.weekId);
		this.props.fetchTopicsByWeek(this.props.match.params.weekId);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.weekId !== this.props.match.params.weekId) {
			this.props.fetchWeek(this.props.match.params.weekId);
			this.props.fetchDaysByWeek(this.props.match.params.weekId);
			this.props.fetchTopicsByWeek(this.props.match.params.weekId);
		}
	}

	render() {
		const { week, days, topics } = this.props;
		if (week && days.length && topics) {
			let title = <div className="show-title">{week.title}</div>;
			let text = <div className="studyset-header">List of Study Sets:</div>;
			let list = (
				<div>
					<Nav tabs>
						{days.map(day => (
							<NavLink
								key={day.id}
								className={{ active: this.state.activeTab === day.title }}
								onClick={() => {
									this.toggle(day.title);
								}}
							>
								{day.title}
							</NavLink>
						))}
					</Nav>
					<TabContent activeTab={this.state.activeTab}>
						{days.map(day => (
							<TabPane key={day.id} tabId={day.title}>
								Algorithms <br />
								{day.topics.map(topic => {
									if (topic.subject === 'Algorithms') {
										return (
											<Bullet
												key={topic.id}
												bullet={topic}
												bulletId={topic.id}
												path={'topics'}
											/>
										);
									}
								})}
								World Wide Web
								{day.topics.map(topic => {
									if (topic.subject === 'World Wide Web') {
										return (
											<Bullet
												key={topic.id}
												bullet={topic}
												bulletId={topic.id}
												path={'topics'}
											/>
										);
									}
								})}
								JavaScript
								{day.topics.map(topic => {
									if (topic.subject === 'JavaScript') {
										return (
											<Bullet
												key={topic.id}
												bullet={topic}
												bulletId={topic.id}
												path={'topics'}
											/>
										);
									}
								})}
								Miscellaneous
								{day.topics.map(topic => {
									if (topic.subject === 'Miscellaneous') {
										return (
											<Bullet
												key={topic.id}
												bullet={topic}
												bulletId={topic.id}
												path={'topics'}
											/>
										);
									}
								})}
							</TabPane>
						))}
					</TabContent>
				</div>
			);
			return (
				<div>
					{title}
					<div className="show-container">
						<div className="studyset-list">
							{text}
							{list}
						</div>
					</div>
				</div>
			);
		} else {
			return <Loader />;
		}
	}
}

export default WeekShow;
