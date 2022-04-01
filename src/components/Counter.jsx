import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../actions'

const Counter = () => {
  let dispatch = useDispatch()

  let counterState = useSelector((state) => state.counterReducer)

  let handleIncrease = () => {
    dispatch(actions.increment(5))
  }

  let handleDecrease = () => {
    if (counterState.sayi > 0) dispatch(actions.decrement(5))
  }

  return (
    <div>
      <button onClick={() => handleDecrease()}>-</button>
      state: {counterState.sayi}
      <button onClick={() => handleIncrease()}>+</button>
    </div>
  )
}

export default Counter
