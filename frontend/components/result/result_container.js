import { connect } from 'react-redux';
import ResultIndex from './result_index';
import { fetchResults } from '../../actions/search';
import { selectResults } from '../../reducers/selectors';

const mapStateToProps = state => ({
	results: selectResults(state)
});

const mapDispatchToProps = dispatch => ({
	fetchResults: value => dispatch(fetchResults(value))
});

const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(
	ResultIndex
);

export default ResultContainer;
