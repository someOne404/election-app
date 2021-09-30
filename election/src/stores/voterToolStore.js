import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { voterToolReducer } from '../reducers/voterToolReducers.js';

let composeEnhancers = composeWithDevTools({
  name: 'Voter Tool'
});

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production") {
  middleware = composeEnhancers(middleware);
}

export const voterToolStore = createStore(
  voterToolReducer,
  middleware,
);