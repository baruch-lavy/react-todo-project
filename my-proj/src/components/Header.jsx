import { useContext } from "react";
import { TodosContext } from "../pages/Index";

export function Header({ setState }) {
    const { todos } = useContext(TodosContext);
    const { isDarkMode } = useContext(TodosContext)

    function toggleTheme() {
        setState(prev => {
            return {...prev, isDarkMode: !prev.isDarkMode}
        })
    }

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
