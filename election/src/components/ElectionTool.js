import PropTypes from 'prop-types';
import { electionPropType } from '../prop-types/elections';

import { ToolHeader } from './ToolHeader';
import { ElectionTable } from './ElectionTable';
import { ElectionForm } from './ElectionForm';

export const ElectionTool = ({
  elections, questions, errorMsg, viewElectionId, 
  onViewElection: setElectionId,
  onSubmitElection: addElection, 
  onAppendQuestion: appendQuestion,
  onSetErrorMsg: setErrorMsg,
}) => {

  return (
    <>
      <ToolHeader headerText="Election Tool" />
      <ElectionTable elections={elections} viewElectionId={viewElectionId} onViewElection={setElectionId}/>
      <ElectionForm buttonText="Add Election" 
        questions={questions} errorMsg={errorMsg}
        onSubmitElection={addElection} 
        onAppendQuestion={appendQuestion}
        onSetErrorMsg={setErrorMsg} />
    </>
  );

};

ElectionTool.defaultProps = {
  elections: [],
};

ElectionTool.propTypes = {
  elections: PropTypes.arrayOf(electionPropType.isRequired),
};