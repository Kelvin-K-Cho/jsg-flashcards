import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	path: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
