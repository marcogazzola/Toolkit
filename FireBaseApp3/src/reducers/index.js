import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import bugs from './bugs';

const bugApp = combineReducers({
  visibilityFilter,
  bugs,
});

export default bugApp;
