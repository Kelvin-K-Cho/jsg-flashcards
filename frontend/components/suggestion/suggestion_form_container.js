import { connect } from 'react-redux';
import SuggestionForm from './suggestion_form';
import { createSuggestion } from '../../actions/suggestions';

const mapDispatchToProps = dispatch => ({
	createSuggestion: suggestion => dispatch(createSuggestion(suggestion))
});

const SuggestionFormContainer = connect(null, mapDispatchToProps)(
	SuggestionForm
);

export default SuggestionFormContainer;
