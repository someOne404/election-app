import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  votersReducer,
  votersSortReducer,
  showFormReducer, 
  editVoterIdReducer,
  errorMessageReducer,
} from '../reducers/voterToolReducers';

import { 
  electionsReducer, 
  viewElectionIdReducer,
  questionsReducer,
  errorMsgReducer,
} from "../reducers/electionToolReducers";

let composeEnhancers = composeWithDevTools({
  name: 'Voter Tool'
});

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production") {
  middleware = composeEnhancers(middleware);
}

export const voterToolStore = createStore(
  combineReducers({
    voters: votersReducer,
    votersSort: votersSortReducer,
    showForm: showFormReducer,
    editVoterId: editVoterIdReducer,
    errorMessage: errorMessageReducer,
    elections: electionsReducer,
    viewElectionId: viewElectionIdReducer,
    questions: questionsReducer,
    errorMsg: errorMsgReducer,
  }),
  middleware,
);

// export const voterAppStore = createStore(
//   combineReducers({
//     voterTool: voterToolReducer,
//     electionTool: electionToolReducer,
//     ballotTool: ballotToolReducer,
//   }),
//   middleware,
// );