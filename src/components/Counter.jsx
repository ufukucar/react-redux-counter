import React, { useEffect } from 'react'

const Counter = () => {
  let handleIncrease = () => {}

  let handleDecrease = () => {}

  useEffect(() => {}, [])

  return (
    <div>
      <button onClick={() => handleDecrease()}>-</button>
      state: {}
      <button onClick={() => handleIncrease()}>+</button>
    </div>
  )
}

export default Counter
