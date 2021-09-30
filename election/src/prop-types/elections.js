import PropTypes, { number } from 'prop-types';

export const questionPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  yesCount: PropTypes.number.isRequired,
});

export const electionsPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(questionPropType).isRequired,
  voterIds: PropTypes.arrayOf(number).isRequired,
});
