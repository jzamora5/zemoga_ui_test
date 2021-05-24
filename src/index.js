import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { HelmetProvider } from 'react-helmet-async';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './App';
import './assets/styles/index.scss';
// import initialState from './initialState.json';

const initialState = { data: [], loading: false, error: null };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const helmetContext = {};

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
