import React from 'react';
import { useAppState } from '../context/AppStateContext';

const Counter = () => {
  const { state, dispatch } = useAppState();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};

export default Counter;
