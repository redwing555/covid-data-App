import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import store from './redux/configureStore';
import { fetchFromApi } from './redux/covid/covid';
import { fetchDataFromApi } from './redux/flags/flags';

store.dispatch(fetchFromApi());
store.dispatch(fetchDataFromApi());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
