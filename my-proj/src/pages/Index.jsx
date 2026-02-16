import { Header } from "../components/Header";
import { CreateTodos } from "../components/CreateTodos";
import { Todo } from "../components/Todo";
import { Posts } from "./Posts";

import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { SystemContext } from "../context/SystemContext";

export function Index() {
  const { todos } = useContext(TodosContext);
  const { isDarkMode, isPostsPage } = useContext(SystemContext)

  if(isPostsPage) {
    return (
        <Posts/>
    )
  }

  return (
    <div className={`main-container ${isDarkMode ? "dark" : "light"}`}>
      <Header />
      <CreateTodos />
      {!todos.length && (
        <p className="no-todos">No todos yet. Add one above!</p>
      )}
      {todos.length > 0 &&
        todos.map((todo, idx) => {
          return <Todo key={idx} todo={todo} />;
        })}
    </div>
  );
}
