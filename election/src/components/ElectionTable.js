import PropTypes from 'prop-types';

import { electionPropType } from '../prop-types/elections';
import { QuestionTable } from './QuestionTable';

export const ElectionTable = ({
  elections,
  viewElectionId,
  onViewElection: setElectionId,
}) => {

  const election = elections.filter(election => election.id === viewElectionId)[0];
  console.log(elections);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {elections.map(election =><tr>
            <td>{election.id}</td>
            <td>{election.name}</td>
            <td>
              <button type="button" onClick={() => setElectionId(election.id)}>
                View Results
              </button>
            </td>
          </tr>)}
        </tbody>
      </table>
      {election && <QuestionTable election={election}/>}
    </>
  );
};

ElectionTable.defaultProps = {
  elections: [],
  viewElectionId: -1,
};

ElectionTable.propTypes = {
  elections: PropTypes.arrayOf(electionPropType.isRequired),
  viewElectionId: PropTypes.number.isRequired,
  // onViewElection: PropTypes.func.isRequired,
};