
import PropTypes from 'prop-types';

import {useForm} from '../hooks/useForm';

export const QuestionForm = ({onSubmitQuestion}) => {
  const [ 
    questionForm,
    change,
    resetQuestionForm,
    setForm,
  ] = useForm({
    question: '',
    errorMsg: '',
  });

  const addQuestion = () => {
    if (questionForm.question) {
      onSubmitQuestion(questionForm.question);
      resetQuestionForm();
    } else {
      setForm({...questionForm, errorMsg: 'Please enter text into the question field'});
    }
  };

  return (
    <>
      <label>
        Question
        <input
          type="text"
          id="question-text-input"
          value={questionForm.question}
          onChange={change}
          name="question"
        />
      </label>
      <button type="button" onClick={addQuestion}>Add Question</button>
      {questionForm.errorMsg && <div>Error: {questionForm.errorMsg}</div>}
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