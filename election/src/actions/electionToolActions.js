export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';
export const APPEND_ELECTION_REQUEST_ACTION = 'APPEND_CAR_REQUEST';
export const APPEND_ELECTION_DONE_ACTION = 'APPEND_CAR_DONE';

export const VIEW_ELECTION_ACTION = 'VIEW_ELECTION_ACTION';
export const APPEND_QUESTION_ACTION = 'APPEND_QUESTION_ACTION';

export const SET_ERROR_MSG_ACTION = 'SET_ERROR_MSG_ACTION';

export const createRefreshElectionsRequestAction = () => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION });
export const createRefreshElectionsDoneAction = ( elections ) => ({ type: REFRESH_ELECTIONS_DONE_ACTION, elections });
export const createAppendElectionRequestAction = newElection => ({ type: APPEND_ELECTION_REQUEST_ACTION, election: newElection });
export const createAppendElectionDoneAction = appendedElection => ({ type: APPEND_ELECTION_DONE_ACTION, election: appendedElection });

export const createViewElectionAction = (electionId) => ({type: VIEW_ELECTION_ACTION, electionId});
export const createAppendQuestionAction = (question) => ({type: APPEND_QUESTION_ACTION, question});
export const createSetErrorMsgAction = (errorMsg) => ({type: SET_ERROR_MSG_ACTION, errorMsg});

export const refreshElections = () => {
  return dispatch => {
    dispatch(createRefreshElectionsRequestAction());

    return fetch('http://localhost:3060/elections')
      .then(res => res.json())
      .then(elections => dispatch(createRefreshElectionsDoneAction( elections )));
  };
};

export const appendElection = (newElection) => {

  return async dispatch => {

    dispatch(createAppendElectionRequestAction(newElection));

    const res = await fetch('http://localhost:3060/elections',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newElection),
      });

    const appendedElection = await res.json();

    dispatch(createAppendElectionDoneAction(appendedElection));
    dispatch(refreshElections());
  };

};