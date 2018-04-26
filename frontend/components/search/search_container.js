import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from './search';

const SearchContainer = withRouter(connect(null, null)(Search));

export default SearchContainer;
