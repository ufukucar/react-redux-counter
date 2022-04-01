import * as actionTypes from '../constants/action-types'

export const increment = (value) => {
  return {
    type: actionTypes.INCREMENT,
    payload: value,
  }
}

export const decrement = (value) => {
  return {
    type: actionTypes.DECREMENT,
    payload: value,
  }
}
