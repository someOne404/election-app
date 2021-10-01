
import PropTypes from 'prop-types';

import {useForm} from '../hooks/useForm';

export const QuestionForm = ({onSubmitQuestion, onSetErrorMsg: setErrorMsg}) => {
  const [ 
    questionForm,
    change,
    resetQuestionForm,
  ] = useForm({
    question: '',
  });

  const addQuestion = () => {
    if (questionForm.question) {
      onSubmitQuestion(questionForm.question);
      resetQuestionForm();
    } else {
      setErrorMsg('Please enter question text');
    }
  };

  return (
    <>
      <label >
        Question:
        <input
          className="mx-2" 
          type="text"
          id="question-text-input"
          value={questionForm.question}
          onChange={change}
          name="question"
        />
      </label>
      <button type="button" onClick={addQuestion}>Add Question</button>
    </>
  );
};

QuestionForm.defaultProps = {
  buttonText: 'Submit Question',
};

QuestionForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitQuestion: PropTypes.func.isRequired,
};