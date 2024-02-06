import TodoItem from "./TodoItem";

function TodoList({ todos, toggleToDo, deleteToDo }) {
  //todos: An array of objects representing tasks to complete.
  return (
    <ul className="list">
      {todos.length === 0 && "There are no tasks for you, yet!"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
