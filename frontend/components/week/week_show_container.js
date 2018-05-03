import { connect } from 'react-redux';
import WeekShow from './week_show';
import { fetchWeek } from '../../actions/weeks';
import { fetchDaysByWeek } from '../../actions/days';
import { fetchTopicsByWeek } from '../../actions/topics';
import { selectDays, selectTopics } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	week: state.entities.weeks[ownProps.match.params.weekId],
	days: selectDays(state),
	topics: selectTopics(state)
});

const mapDispatchToProps = dispatch => ({
	fetchWeek: weekId => dispatch(fetchWeek(weekId)),
	fetchDaysByWeek: weekId => dispatch(fetchDaysByWeek(weekId)),
	fetchTopicsByWeek: weekId => dispatch(fetchTopicsByWeek(weekId))
});

const WeekShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	WeekShow
);

export default WeekShowContainer;
