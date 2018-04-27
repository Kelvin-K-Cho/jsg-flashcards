import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import Loader from '../loader/loader';

class WeekShow extends React.Component {
	componentDidMount() {
		this.props.fetchWeek(this.props.match.params.weekId);
		this.props.fetchDaysByWeek(this.props.match.params.weekId);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.weekId !== this.props.match.params.weekId) {
			this.props.fetchWeek(this.props.match.params.weekId);
			this.props.fetchDaysByWeek(this.props.match.params.weekId);
		}
	}

	render() {
		const { week, days } = this.props;
		if (week && days) {
			let title = <div className="show-title">{week.title}</div>;
			let text = <div className="studyset-header">List of Study Sets:</div>;
			let list = (
				<div>
					{days.map(day => (
						<Nav vertical key={day.id}>
							{day.title}
						</Nav>
					))}
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
