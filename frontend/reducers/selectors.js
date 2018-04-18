import values from 'lodash/values';
import keys from 'lodash/keys';

const selectTopics = state => values(state.entities.topics);
const selectSubjects = state => values(state.entities.subjects);

export { selectTopics, selectSubjects };
