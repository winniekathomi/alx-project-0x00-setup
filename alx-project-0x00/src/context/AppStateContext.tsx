import React, { createContext, useReducer, useContext, useEffect } from "react";

// Types
type User = {
  id: string;
  name: string;
  email?: string;
};

type State = {
  isAuthenticated: boolean;
  user: User | null;
  theme: "light" | "dark";
};

type Action =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "TOGGLE_THEME" };

// Initial state
const defaultState: State = {
  isAuthenticated: false,
  user: null,
  theme: "light",
};

// Helpers to read/write localStorage
const LOCAL_STORAGE_KEY = "appState";

const loadState = (): State => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  return stored ? JSON.parse(stored) : defaultState;
};

const saveState = (state: State) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

// Reducer
const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

// Context
const AppStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: defaultState,
  dispatch: () => {},
});

// Provider
export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, defaultState, loadState);

  // Persist state on change
  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Hook
export const useAppState = () => useContext(AppStateContext);
