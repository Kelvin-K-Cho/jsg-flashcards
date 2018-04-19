import values from 'lodash/values';
import keys from 'lodash/keys';

const selectTopics = state => values(state.entities.topics);
const selectSubjects = state => values(state.entities.subjects);
const selectQuestions = state => values(state.entities.questions);
const selectAnswers = state => values(state.entities.answers);

export { selectTopics, selectSubjects, selectQuestions, selectAnswers };
