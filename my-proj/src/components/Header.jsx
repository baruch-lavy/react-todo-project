import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { SystemContext } from "../context/ThemeContext";

export function Header() {
    const { todos } = useContext(TodosContext);
    const { isDarkMode, toggleTheme } = useContext(SystemContext)

  return (
    <header className={isDarkMode ? 'dark' : 'light'}>
      <div className="logo">Todo App</div>
      <div className="right-side">
        <span>{`Total Todos: ${todos.length}`}</span>
        <button className="mode-button" onClick={toggleTheme}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </header>
  );
}
