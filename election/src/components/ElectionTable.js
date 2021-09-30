import PropTypes from 'prop-types';

import { electionsPropType } from '../prop-types/elections';

export const ElectionTable = ({
  elections,
  viewElectionId,
  onViewElection: setElectionId,
}) => {

  return (
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
          <td><button type="button" onClick={() => setElectionId(election.id)}>View Results</button></td>
        </tr>)}
      </tbody>
    </table>
  );
};

ElectionTable.defaultProps = {
  elections: [],
  viewElectionId: -1,
};

ElectionTable.propTypes = {
  elections: electionsPropType.isRequired,
  viewElectionId: PropTypes.number.isRequired,
  onViewElection: PropTypes.func.isRequired,
};