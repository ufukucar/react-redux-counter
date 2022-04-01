import * as actionTypes from '../constants/action-types'

const initialState = { sayi: 0 }

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, sayi: state.sayi + action.payload }

    case actionTypes.DECREMENT:
      return { ...state, sayi: state.sayi - action.payload }

    default:
      return state
  }
}
