export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';
export const SORT_VOTERS_ACTION = 'SORT_VOTERS';
export const CREATE_VOTER_REQUEST_ACTION = 'CREATE_VOTERS_REQUEST';
export const CREATE_VOTER_REQUEST_DONE = 'CREATE_VOTERS_DONE';
export const REMOVE_VOTER_REQUEST_ACTION = 'REMOVE_VOTERS_REQUEST';
export const REMOVE_VOTER_REQUEST_DONE = 'REMOVE_VOTERS_DONE';


export const createAppendVoterRequestAction = ( newVoter ) => ({ type: CREATE_VOTER_REQUEST_ACTION, newVoter });
export const createAppendVoterDoneAction = ( addedVoter ) => ({ type: CREATE_VOTER_REQUEST_DONE, addedVoter });
export const createRemoveVoterRequestAction = ( voterId ) => ({ type: REMOVE_VOTER_REQUEST_ACTION, voterId });
export const createRemoveVoterDoneAction = ( ) => ({ type: REMOVE_VOTER_REQUEST_DONE });
export const createRefreshVotersRequestAction = () => ({ type: REFRESH_VOTERS_REQUEST_ACTION });
export const createRefreshVotersDoneAction = ( voters ) => ({ type: REFRESH_VOTERS_DONE_ACTION, voters });
export const createSortVotersAction = (col) => ({ type: SORT_VOTERS_ACTION, col });


export const appendVoter = (newVoter) => {
  return async dispatch => {
      dispatch(createAppendVoterRequestAction(newVoter));
      const res = await fetch('http://localhost:3060/voters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVoter),
      });

      const appendedVoter = await res.json();
      dispatch(createAppendVoterDoneAction(newVoter));
      dispatch(refreshVoters);
  }
};

export const removeVoter = (voterId) => {
  return async dispatch => {
      dispatch(createRemoveVoterRequestAction(voterId));
      const res = await fetch(`http://localhost:3060/voters/${encodeURIComponent(voterId)}`, {
        method: 'DELETE',
      });

      dispatch(createRemoveVoterDoneAction());
      dispatch(refreshVoters);
  }
};

export const refreshVoters = () => {

    // this function being returned is the thunk action
    return dispatch => {
  
      dispatch(createRefreshVotersRequestAction());
  
      return fetch('http://localhost:3060/voters')
        .then(res => res.json())
        .then(voters => dispatch(createRefreshVotersDoneAction( voters )));
    };
};

