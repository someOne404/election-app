
import PropTypes from 'prop-types';

import {useForm} from '../hooks/useForm';
import {QuestionForm} from './QuestionForm';

export const ElectionForm = ({buttonText, onSubmitElection}) => {
  const [ 
    electionForm, // state data 
    change,
    resetElectionForm,
    setForm,
  ] = useForm({
    name: '', 
    questions: [],
    voterIds: [],
    errorMsg: '',
  });

  const submitElection = () => {
    if (electionForm.name && electionForm.questions.length > 0) {
      onSubmitElection({ ...electionForm });
      resetElectionForm();
    } else {
      setForm({...electionForm, errorMsg: 'Please enter election name and questions'});
    }
  };

  const addQuestion = (questionText) => {
    const {questions} = electionForm; 
    setForm({
      ...electionForm,
      questions: [...questions, {question: questionText, id: questions.length + 1, yesCount: 0}],
    });
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
            {electionForm.questions.map(q => <li key={q.id}>{q.question}</li>)}
          </ol>
        </div>
        <QuestionForm onSubmitQuestion={addQuestion}/>
        <button type="button" onClick={submitElection}>{buttonText}</button>
      </form>
      {electionForm.errorMsg && <div>Error: {electionForm.errorMsg}</div>}
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