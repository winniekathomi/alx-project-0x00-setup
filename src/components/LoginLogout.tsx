'use client';

import React from 'react';
import { useAppState } from '../context/AppStateContext';

const LoginLogout: React.FC = () => {
  const { state, dispatch } = useAppState();

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: {
        id: '1',
        name: 'Winnie Memba',
        email: 'winnie@example.com',
      },
    });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const isAuthenticated = !!state.user;

  return (
    <div style={{ marginBottom: '1rem' }}>
      {isAuthenticated ? (
        <>
          <p>
            <strong>Name:</strong> {state.user?.name || 'Guest'}
          </p>
          <p>
            <strong>Email:</strong> {state.user?.email || 'Not logged in'}
          </p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default LoginLogout;
