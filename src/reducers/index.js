import { counterReducer } from './counter'

import { combineReducers } from 'redux'

let allReducers = combineReducers({
  counterReducer,
})

export default allReducers
