export function Todo({ todo, setState }) {

    function removeTodo(id) {
        setState(prev => {
            return {...prev, todos: prev.todos.filter(todo => {
                return todo.id !== id
            })}
        })
    }


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
