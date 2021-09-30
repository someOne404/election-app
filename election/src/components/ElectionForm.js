
import PropTypes from 'prop-types';

import {useForm} from '../hooks/useForm';
import {QuestionForm} from './QuestionForm';

export const ElectionForm = ({
  buttonText, questions, errorMsg,
  onSubmitElection,
  onAppendQuestion: appendQuestion,
  onSetErrorMsg: setErrorMsg,
}) => {
  const [ 
    electionForm, // state data 
    change,
    resetElectionForm,
  ] = useForm({
    name: '',
    question: '',
  });

  const submitElection = () => {
    if (electionForm.name) {
      onSubmitElection({ ...electionForm, questions, voterIds: []});
      resetElectionForm();
    } else {
      setErrorMsg('Please enter election name');
    }
  };

  const addQuestion = (questionText) => {
    appendQuestion({question: questionText, id: questions.length + 1, yesCount: 0});
  };

  return (
    <>
      <form>
        <label>
          Election Name:
          <input type="text" name="name" value={electionForm.name} onChange={change} />
        </label>
        <div>
          Questions:
          <ol>
            {questions.map(q => <li key={q.id}>{q.question}</li>)}
          </ol>
        </div>
        <QuestionForm onSubmitQuestion={addQuestion}/>


        {/* <label>
          Question
          <input
            type="text"
            id="question-text-input"
            value={electionForm.question}
            onChange={change}
            name="question"
          />
        </label>
        <button type="button" onClick={addQuestion}>Add Question</button> */}

        <button type="button" onClick={submitElection}>{buttonText}</button>
      </form>
      {errorMsg && <div>Error: {errorMsg}</div>}
    </>
  );
};

ElectionForm.defaultProps = {
  buttonText: 'Submit Election',
};

ElectionForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitElection: PropTypes.func.isRequired,
};