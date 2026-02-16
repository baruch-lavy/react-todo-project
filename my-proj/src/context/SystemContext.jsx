import { createContext, useState } from "react";
export const SystemContext = createContext(null);

export function SystemProvider({ children }) {
  const [state, setState] = useState({
    isDarkMode: false,
    isPostsPage: false,
  });


  function toggleTheme() {
    setState((prev) => {
      return { ...prev, isDarkMode: !prev.isDarkMode };
    });
  }

  function togglePages() {
    setState((prev) => {
      return { ...prev, isPostsPage: !prev.isPostsPage };
    });
  }

  return (
    <SystemContext.Provider value={{ ...state, toggleTheme, togglePages }}>
      {children}
    </SystemContext.Provider>
  );
}
