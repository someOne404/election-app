
import PropTypes from 'prop-types';
import { questionPropType } from '../prop-types/elections';

export const QuestionList = ({
  questions,
  onDeleteQuestion: deleteQuestion,
 }) => {

  return (
    <>
      <ul>{questions.map(({ id, name }) =>
        <li key={id}>
          {id} - {name}
          <button type="button" onClick={() => deleteQuestion(id)}>X</button>
        </li>)}
      </ul>
    </>
  );
};

QuestionList.defaultProps = {
  questions: [],
  toggleSortButtonText: 'Sort Me!',
};

QuestionList.propsTypes = {
  questions: PropTypes.arrayOf(questionPropType).isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
};