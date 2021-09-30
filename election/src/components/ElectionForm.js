
import PropTypes from 'prop-types';

import {useForm} from '../hooks/useForm';
import { QuestionList } from './QuestionList';

export const ElectionForm = ({buttonText, onSubmitElection}) => {
  const [ 
    electionForm, // state data 
    change,
    resetElectionForm,
  ] = useForm({
    name: '', 
    questions: [],
  });

  const submitElection = () => {

    onSubmitElection({ ...electionForm });

    resetElectionForm();
  };

  return (
    <form>
      <label>
        Election Name:
        <input type="text" name="name" value={electionForm.name} onChange={change}/>
      </label>
      {/* <QuestionList questions={questions} /> */}
      {/* <label>
        New Election Question:
        <input type="text" name="hexcode" value={electionForm.question} onChange={change}/>
      </label> */}
      <button type="button" onClick={submitElection}>{buttonText}</button>
    </form>
  );
};

ElectionForm.defaultProps = {
  buttonText: 'Submit Election',
};

ElectionForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitElection: PropTypes.func.isRequired,
};