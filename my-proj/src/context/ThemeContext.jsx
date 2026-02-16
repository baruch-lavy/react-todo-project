import { createContext, useState } from "react";
export const SystemContext = createContext(null);

export function SystemProvider({ children }) {
  const [state, setState] = useState({
    isDarkMode: false,
  });


  function toggleTheme() {
    setState((prev) => {
      return { ...prev, isDarkMode: !prev.isDarkMode };
    });
  }

  return (
    <SystemContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </SystemContext.Provider>
  );
}
