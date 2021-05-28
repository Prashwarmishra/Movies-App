import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// const logger = ( {dispatch, getState} ) => (next) => (action) => {console.log('action-type = ', action.type); return next(action)}

const logger = ( {dispatch, getState} ) => (next) => (action) => {
  if(typeof action !== 'function'){
    console.log('ACTION-TYPE = ', action.type);
  }
  return next(action);
}

// const thunk = ( {dispatch, getState} ) => (next) => (action) => {
//   if(typeof action === 'function'){
//     return action(dispatch);
//   }
//   return next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>,
  document.getElementById('root')
);