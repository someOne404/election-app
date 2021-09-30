import { combineReducers } from "redux";

import { 
  REFRESH_ELECTIONS_REQUEST_ACTION,
} from "../actions/electionToolActions";

export const electionsReducer  = (elections = [], action) => {
  switch (action.type) {
    case REFRESH_ELECTIONS_REQUEST_ACTION:
      return action.elections;
    default:
      return elections;
  }
};

export const electionToolReducer = combineReducers({
  elections: electionsReducer,
});