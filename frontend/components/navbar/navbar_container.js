import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session';
import { fetchTopics } from '../../actions/topics';
import { fetchWeeks } from '../../actions/weeks';
import { selectTopics, selectWeeks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	path: ownProps.location.pathname,
	topics: selectTopics(state),
	weeks: selectWeeks(state)
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
	fetchTopics: () => dispatch(fetchTopics()),
	fetchWeeks: () => dispatch(fetchWeeks())
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavbarContainer;
