import { combineReducers } from "redux";

import { 
  CANCEL_VOTER_ACTION,
  EDIT_VOTER_ACTION,
    REFRESH_VOTERS_DONE_ACTION,
    SORT_VOTERS_ACTION,
    TOGGLE_FORM_ACTION,
} from "../actions/voterToolActions";


export const votersReducer  = (voters = [], action) => {

    switch (action.type) {
      case REFRESH_VOTERS_DONE_ACTION:
        return action.voters;
      default:
        return voters;
    }
};

export const showFormReducer  = (showForm = false, action) => {
  switch (action.type) {
    case TOGGLE_FORM_ACTION:
      return !showForm;
    default:
      return showForm;
  };
};

export const editVoterIdReducer = (editVoterId = -1, action) => {
  console.log(action.voterId);
  if (action.type === EDIT_VOTER_ACTION){
    return action.voterId;
  }

  if ([REFRESH_VOTERS_DONE_ACTION, CANCEL_VOTER_ACTION].includes(action.type)){
    return -1;
  }

  return editVoterId;
}

export const votersSortReducer = (votersSort = { col: 'id', dir: 'asc' }, action) => {
    if (action.type === SORT_VOTERS_ACTION) {
      if (action.col === votersSort.col) {
        return { col: votersSort.col, dir: votersSort.dir === 'asc' ? 'desc' : 'asc' };
      } else {
        return { col: action.col, dir: 'asc' };
      };
    }
  
    return votersSort;
};

export const voterToolReducer = combineReducers({
    voters: votersReducer,
    votersSort: votersReducer,
    showForm: showFormReducer,
    editVoterId: editVoterIdReducer,
});