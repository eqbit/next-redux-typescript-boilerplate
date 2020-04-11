import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Reducers from './reducers';

export const makeStore = (initialState: Object) => {
  return createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
