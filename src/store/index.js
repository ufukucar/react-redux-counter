import { createStore, applyMiddleware } from 'redux'

import allReducers from '../reducers'

import { composeWithDevTools } from 'redux-devtools-extension'

let store = createStore(allReducers, composeWithDevTools(applyMiddleware()))

export default store
