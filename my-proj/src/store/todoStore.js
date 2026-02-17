let nextId = 0;
let todos = [{ id: nextId++, title: "Learn React", priority: "High" }];

let listeners = [];

export const todoStore = {
  getSnapShot() {
    return todos;
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  addTodo(todo) {
    todos = [...todos, {id: nextId++, title: todo.title, priority: todo.priority}];
    emitChange();
  },
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
