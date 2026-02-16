import { Header } from "../components/Header";
import { CreateTodos } from "../components/CreateTodos";
import { Todo } from "../components/Todo";
import { createContext, useState } from "react";

export const TodosContext = createContext({
  totalTodos: 0,
  todos: [],
  isDarkMode: false,
});

export function Index() {
  const [state, setState] = useState({
    todos: [],
    isDarkMode: false,
  });

  return (
    <TodosContext.Provider value={state}>
      <div className={`main-container ${state.isDarkMode ? 'dark' : 'light'}`}>
        <Header setState={setState}/>
        <CreateTodos setState={setState} />
        {!state.todos.length && <p className="no-todos">No todos yet. Add one above!</p>}
        {state.todos.length > 0 &&
          state.todos.map((todo, idx) => {
            return <Todo key={idx} todo={todo} setState={setState} />;
          })}
      </div>
    </TodosContext.Provider>
  );
}
