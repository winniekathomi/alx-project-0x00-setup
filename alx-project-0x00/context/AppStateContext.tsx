import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// 1. Define the shape of your state
interface AppState {
  count: number;
}

// 2. Define action types
type Action = { type: 'increment' } | { type: 'decrement' };

// 3. Initial state value
const initialState: AppState = { count: 0 };

// 4. Reducer function that updates state based on action
function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 5. Create a context type for state and dispatch
const AppStateContext = createContext<
  { state: AppState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// 6. Create the provider component
export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// 7. Custom hook to consume the context in components
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
