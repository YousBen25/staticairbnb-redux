import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import
{
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise'; // for fetch purposes
import '../assets/stylesheets/application.scss';
import selectedFlatReducer from './reducers/selected_flat_reducer';
import flatsReducer from './reducers/flats_reducer';
import App from './components/app';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
