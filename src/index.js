import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './Components/App';
import store from './redux/configureStore';
import { loadDataThunk } from './redux/covid/covid';

store.dispatch(loadDataThunk());
// store.dispatch(loadHistoryThunk('france'));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
