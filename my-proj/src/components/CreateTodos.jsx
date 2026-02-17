import { useContext, useRef, useState } from "react";
import { TodosContext } from "../context/TodosContext";
import { SystemContext } from "../context/SystemContext";

import { todoStore } from "../store/todoStore";

export function CreateTodos() {
  const { addTodo } = useContext(TodosContext);
  const { isDarkMode } = useContext(SystemContext);



  const todoId = useRef(1);
  const titleValue = useRef("");
  const [todo, setTodo] = useState({
    id: todoId.current,
    title: null,
    priority: null,
  });

  function handleChange(ev) {
    const { name, value } = ev.target;
    if (name === "title") {
      titleValue.current = value;
    }
    setTodo((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (todo.title && todo.priority) {
      todoStore.addTodo(todo);
    }

    todoId.current += 1;
    setTodo((prev) => {
      return { ...prev, title: null, priority: null, id: todoId.current };
    });
    clear();
  }

  function clear() {
    titleValue.current = "";
  }

  return (
    <form onSubmit={handleSubmit} className={isDarkMode ? "dark" : "light"}>
      <h3>Add a New Todo</h3>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        value={titleValue.current}
        id="title"
        name="title"
        placeholder="What do you need to do?"
        onChange={handleChange}
      />

      <label htmlFor="priority">Priority</label>
      <select
        name="priority"
        id="priority"
        value={todo.priority || ""}
        onChange={handleChange}
      >
        <option value="" disabled>
          --Choose Priority--
        </option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="important">Very Important</option>
      </select>

      <section className="buttons-section">
        <button className="save" type="submit">
          Save Todos
        </button>
        <button className="clear" onClick={clear}>
          Clear
        </button>
      </section>
    </form>
  );
}
