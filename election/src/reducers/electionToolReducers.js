import { 
  REFRESH_ELECTIONS_DONE_ACTION,
  VIEW_ELECTION_ACTION,
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