import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavbarContainer;
