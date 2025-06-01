import React from "react";
import { AppStateProvider } from "./context/AppStateContext";
import UserProfile from "./components/UserProfile";

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <div className="App">
        <UserProfile />
        {/* Other components */}
      </div>
    </AppStateProvider>
  );
};

export default App;
