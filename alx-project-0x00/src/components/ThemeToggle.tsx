import React from 'react';
import { useAppState } from '../context/AppStateContext';

const ThemeToggle: React.FC = () => {
  const { state, dispatch } = useAppState();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div>
      <p>Current Theme: {state.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
