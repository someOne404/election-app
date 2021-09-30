import { combineReducers } from "redux";

import { 
  REFRESH_ELECTIONS_DONE_ACTION,
  VIEW_ELECTION_ACTION,
  APPEND_QUESTION_ACTION,
  SET_ERROR_MESSAGE_ACTION,
} from "../actions/electionToolActions";

export const electionsReducer  = (elections = [], action) => {
  switch (action.type) {
    case REFRESH_ELECTIONS_DONE_ACTION:
      return action.elections;
    default:
      return elections;
  }
};

export const viewElectionIdReducer = (viewElectionId = -1, action) => {

  if (action.type === VIEW_ELECTION_ACTION) {
    return action.electionId;
  }

  if (REFRESH_ELECTIONS_DONE_ACTION) {
    return -1;
  }

  return viewElectionId;
};


export const questionsReducer = (questions = [], action) => {

  if (action.type === APPEND_QUESTION_ACTION) {
    return [...questions, action.question];
  }
  return questions;
};


export const errorMsgReducer = (errorMsg = '', action) => {

  if (action.type === SET_ERROR_MESSAGE_ACTION) {
    return action.errorMsg;
  }

  return '';
};

export const electionToolReducer = combineReducers({
  elections: electionsReducer,
  viewElectionId: viewElectionIdReducer,
  questions: questionsReducer,
  errorMsg: errorMsgReducer,
});