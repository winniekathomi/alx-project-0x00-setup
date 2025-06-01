import React from "react";
import { useAppState } from "../context/AppStateContext";

const UserProfile: React.FC = () => {
  const { state, dispatch } = useAppState();

  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: state.theme === "light" ? "#f0f0f0" : "#333",
        color: state.theme === "light" ? "#000" : "#fff",
        borderRadius: "8px",
        maxWidth: "300px",
        margin: "1rem auto",
        textAlign: "center",
      }}
    >
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {state.user?.name || "Guest"}
      </p>
      <p>
        <strong>Email:</strong> {state.user?.email || "Not logged in"}
      </p>
      <p>
        <strong>Theme:</strong> {state.theme}
      </p>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default UserProfile;
