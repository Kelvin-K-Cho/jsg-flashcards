import { connect } from 'react-redux';
import SuggestionIndex from './suggestion_index';
import { fetchSuggestions } from '../../actions/suggestions';
import { selectSuggestions } from '../../reducers/selectors';

const mapStateToProps = state => ({
	suggestions: selectSuggestions(state)
});

const mapDispatchToProps = dispatch => ({
	fetchSuggestions: () => dispatch(fetchSuggestions())
});

const SuggestionIndexContainer = connect(mapStateToProps, mapDispatchToProps)(
	SuggestionIndex
);

export default SuggestionIndexContainer;
