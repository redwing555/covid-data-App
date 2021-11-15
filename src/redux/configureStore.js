import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { covidReducer } from './covid/covid';
import { flagReducer } from './flags/flags';

const reducer = combineReducers({
  covidReducer,
  flagReducer,
});

const middleware = [logger, thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
