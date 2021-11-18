import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import CountryInfo from '../../Components/CountryInfo';
import { covidReducer } from '../../redux/covid/covid';

const reducer = combineReducers({
  covidReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
// import store from '../redux/configureStore';

describe('Country information', () => {
  it('renders', () => {
    const tree = renderer
      .create(

        <Provider store={store}>
          <Router>
            <Route path="/country">
              <CountryInfo
                current="Morocco"
                image="https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/Morocco/vector.svg"
              />
            </Route>
          </Router>
        </Provider>

        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
