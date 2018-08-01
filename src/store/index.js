import { createStore, combineReducers } from 'redux'
import { testGroup } from './reducers'

const rootReducer = combineReducers({
  testGroup
})

export default createStore(rootReducer)
