import { connect } from 'react-redux';
import WeekShow from './week_show';
import { fetchWeek } from '../../actions/weeks';
import { fetchDaysByWeek } from '../../actions/days';
import { selectDays } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	week: state.entities.weeks[ownProps.match.params.weekId],
	days: selectDays(state)
});

const mapDispatchToProps = dispatch => ({
	fetchWeek: weekId => dispatch(fetchWeek(weekId)),
	fetchDaysByWeek: weekId => dispatch(fetchDaysByWeek(weekId))
});

const WeekShowContainer = connect(mapStateToProps, mapDispatchToProps)(
	WeekShow
);

export default WeekShowContainer;
