import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import combineReducers from './reducers';

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

const store = createStore(combineReducers, applyMiddleware(logger, thunk));

export const StoreContext = createContext();

console.log('StoreContext=', StoreContext);

class Provider extends React.Component{
  render(){
    const { store } = this.props;
    return (
      <StoreContext.Provider value = { store }>
        { this.props.children }
      </StoreContext.Provider>
    )
  }
}

export function connect(callback){
  return function (Component){
    class ConnectedComponent extends React.Component{
      constructor(props){
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
      }
      componentWillUnmount(){
        this.unsubscribe();
      }
      render(){
        const {store} = this.props;
        const state = store.getState();
        const dataToBePassedAsProps = callback(state);
        return (
          <Component 
            {...dataToBePassedAsProps} 
            dispatch = {store.dispatch} 
          />
        )
      }
    }
    class ConnectedComponentWrapper extends React.Component{
      render(){
        return (
          <StoreContext.Consumer>
            {(store) => (
              <ConnectedComponent store = {store} />
            )}
          </StoreContext.Consumer>
        )
      }
    }
    return ConnectedComponentWrapper;
  }
}


ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
  document.getElementById('root')
);