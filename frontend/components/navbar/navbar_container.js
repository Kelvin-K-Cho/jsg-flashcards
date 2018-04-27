import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session';
import { fetchSubjects } from '../../actions/subjects';
import { fetchWeeks } from '../../actions/weeks';
import { selectSubjects, selectWeeks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	path: ownProps.location.pathname,
	subjects: selectSubjects(state),
	weeks: selectWeeks(state)
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
	fetchSubjects: () => dispatch(fetchSubjects()),
	fetchWeeks: () => dispatch(fetchWeeks())
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavbarContainer;
