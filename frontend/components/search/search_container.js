import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './search';
import { fetchResults } from '../../actions/search';

const mapDispatchToProps = dispatch => ({
	fetchResults: value => dispatch(fetchResults(value))
});

const SearchContainer = withRouter(connect(null, mapDispatchToProps)(Search));

export default SearchContainer;
