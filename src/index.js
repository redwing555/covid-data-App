import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import store from './redux/configureStore';
import { fetchFromApi } from './redux/covid/covid';

store.dispatch(fetchFromApi());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
