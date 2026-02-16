import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

export function Todo({ todo }) {

    const { removeTodo } = useContext(TodosContext)

  return (
    <section className={`todo ${todo.priority}`}>
      <div className="info">
        <span className="title">{todo.title}</span>
        <span className="priority">{todo.priority}</span>
      </div>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </section>
  );
}
