import { createContext, useState } from "react";
export const TodosContext = createContext(null);

export function TodosProvider({ children }) {
  const [state, setState] = useState({
    todos: [],
    isDarkMode: false,
  });

  function addTodo(todo) {
    setState((prev) => {
      return { ...prev, todos: [...prev.todos, todo] };
    });
  }

  function removeTodo(id) {
    setState((prev) => {
      return {
        ...prev,
        todos: prev.todos.filter((todo) => {
          return todo.id !== id;
        }),
      };
    });
  }

  return (
    <TodosContext.Provider value={{ ...state, addTodo, removeTodo}}>
      {children}
    </TodosContext.Provider>
  );
}
