import { combineReducers } from "redux";
import { REFRESH_ELECTIONS_DONE_ACTION } from "../actions/votingToolActions";

export const electionsReducer  = (elections = [], action) => {

    switch (action.type) {
      case REFRESH_ELECTIONS_DONE_ACTION:
        console.log("refreshing");
        return action.elections;
      default:
        return elections;
    }
};

export const votingToolReducer = combineReducers({
    elections: electionsReducer,
});