import { createStore, compose } from 'redux';
import { todoReducer } from './todo-reducers';

export const store = createStore(todoReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
