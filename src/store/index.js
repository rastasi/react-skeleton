import { createStore, combineReducers } from 'redux';
import { testGroup, localeGroup } from './reducers';

const rootReducer = combineReducers({
  testGroup,
  localeGroup
});

export default createStore(rootReducer);
