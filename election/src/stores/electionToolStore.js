import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { electionToolReducer } from '../reducers/electionToolReducers';

let composeEnhancers = composeWithDevTools({
  name: 'Election Tool'
});

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production") {
  middleware = composeEnhancers(middleware);
}

export const electionToolStore = createStore(
  electionToolReducer,
  middleware,
);