export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';
export const START_VOTING_ACTION = 'START_VOTING';


export const createRefreshElectionsRequestAction = () => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION });
export const createRefreshElectionsDoneAction = ( elections ) => ({ type: REFRESH_ELECTIONS_DONE_ACTION, elections });
export const startVotingAction = ( electionId ) => ({ type: START_VOTING_ACTION, electionId });


export const refreshElections = () => {
  return dispatch => {
    dispatch(createRefreshElectionsRequestAction());

    return fetch('http://localhost:3060/elections')
        .then(res => res.json())
        .then(elections => dispatch(createRefreshElectionsDoneAction(elections)));
  };
};
