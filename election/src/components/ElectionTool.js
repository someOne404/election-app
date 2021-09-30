import PropTypes from 'prop-types';
import { electionPropType } from '../prop-types/elections';

import { ToolHeader } from './ToolHeader';
import { ElectionTable } from './ElectionTable';
import { ElectionForm } from './ElectionForm';
import { ToolFooter } from './ToolFooter';

export const ElectionTool = ({
  elections,
  viewElectionId, 
  onViewElection: setElectionId,
  onSubmitElection: addElection, 
}) => {

  return (
    <>
      <ToolHeader headerText="Election Tool" />
      <ElectionTable elections={elections} viewElectionId={viewElectionId} onViewElection={setElectionId}/>
      <ElectionForm buttonText="Add Election" onSubmitElection={addElection} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};

ElectionTool.defaultProps = {
  elections: [],
};

ElectionTool.propTypes = {
  elections: PropTypes.arrayOf(electionPropType.isRequired),
};