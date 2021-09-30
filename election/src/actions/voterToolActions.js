export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';
export const SORT_VOTERS_ACTION = 'SORT_VOTERS';
export const CREATE_VOTER_REQUEST_ACTION = 'CREATE_VOTERS_REQUEST';
export const CREATE_VOTER_REQUEST_DONE = 'CREATE_VOTERS_DONE';
export const REMOVE_VOTER_REQUEST_ACTION = 'REMOVE_VOTER_REQUEST';
export const REMOVE_VOTER_DONE_ACTION = 'REMOVE_VOTER_DONE';
export const TOGGLE_FORM_ACTION = 'TOGGLE_FORM';
export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';
export const REPLACE_VOTER_REQUEST_ACTION = 'REPLACE_VOTER_REQUEST';
export const REPLACE_VOTER_DONE_ACTION = 'REPLACE_VOTER_DONE';
export const SET_ERROR_MESSAGE_ACTION = 'SET_ERROR_MESSAGE_ACTION';
export const REMOVE_SELECTED_VOTERS_REQUEST_ACTION = 'REMOVE_SELECTED_VOTERS_REQUEST';
export const REMOVE_SELECTED_VOTERS_DONE_ACTION = 'REMOVE_SELECTED_VOTERS_DONE';


export const createAppendVoterRequestAction = ( newVoter ) => ({ type: CREATE_VOTER_REQUEST_ACTION, newVoter });
export const createAppendVoterDoneAction = ( addedVoter ) => ({ type: CREATE_VOTER_REQUEST_DONE, addedVoter });
export const createRemoveVoterRequestAction = ( voterId ) => ({ type: REMOVE_VOTER_REQUEST_ACTION, voterId });
export const createRemoveVoterDoneAction = ( ) => ({ type: REMOVE_VOTER_DONE_ACTION });
export const createRefreshVotersRequestAction = () => ({ type: REFRESH_VOTERS_REQUEST_ACTION });
export const createRefreshVotersDoneAction = ( voters ) => ({ type: REFRESH_VOTERS_DONE_ACTION, voters });
export const createSortVotersAction = (col) => ({ type: SORT_VOTERS_ACTION, col });
export const createToggleFormAction = () => ({ type: TOGGLE_FORM_ACTION });
export const createEditVoterAction = voterId => ({ type: EDIT_VOTER_ACTION, voterId });
export const createCancelVoterAction = () => ({ type: CANCEL_VOTER_ACTION });
export const createReplaceVoterRequestAction = voterId => ({ type: REPLACE_VOTER_REQUEST_ACTION, voterId });
export const createReplaceVoterDoneAction = () => ({ type: REPLACE_VOTER_DONE_ACTION });
export const createSetErrorMessageAction = (errorMessage) => ({ type: SET_ERROR_MESSAGE_ACTION, errorMessage });
export const createRemoveSelectedVotersRequestAction = ( voterIds ) => ({ type: REMOVE_SELECTED_VOTERS_REQUEST_ACTION, voterIds });
export const createRemoveSelectedVotersDoneAction = ( ) => ({ type: REMOVE_SELECTED_VOTERS_DONE_ACTION });

const isFormFilled = (newVoter) => {
  let isFilled = true;
  Object.values(newVoter).forEach((value) => {
    if (value.length === 0) isFilled = false
  });
  return isFilled;
}; 

export const appendVoter = (newVoter) => {
  return async dispatch => {
      if (isFormFilled(newVoter)) {
        dispatch(createAppendVoterRequestAction(newVoter));
        const res = await fetch('http://localhost:3060/voters', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newVoter),
        });
  
        const appendedVoter = await res.json();
        dispatch(createAppendVoterDoneAction(appendedVoter));
        dispatch(refreshVoters());
      } else {
        dispatch(createSetErrorMessageAction("Please fill out all fields."));
      }
  }
};

export const removeVoter = (voterId) => {

  return async dispatch => {

      dispatch(createRemoveVoterRequestAction(voterId));

      await fetch(`http://localhost:3060/voters/${encodeURIComponent(voterId)}`, 
        {
            method: 'DELETE',
        });

      dispatch(createRemoveVoterDoneAction());
      dispatch(refreshVoters());
  }

};

export const replaceVoter = (newVoter) => {

  return async dispatch => {
    if (isFormFilled(newVoter)) {
      dispatch(createReplaceVoterRequestAction(newVoter.id));

      await fetch('http://localhost:3060/voters/' + encodeURIComponent(newVoter.id),
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newVoter),
        });
  
      dispatch(createReplaceVoterDoneAction());
      dispatch(refreshVoters());
    } else {
      dispatch(createSetErrorMessageAction("Please fill out all fields."));
    }
  };

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

export const removeSelectedVoters = (voterIds) => {

    console.log('voterIds = '+voterIds);

    return dispatch => {
        dispatch(createRemoveSelectedVotersRequestAction(voterIds));
        voterIds.map((id) => {
            dispatch(removeVoter(id));
        });
        dispatch(createRemoveSelectedVotersDoneAction());
        dispatch(refreshVoters());       
    };
  
};
