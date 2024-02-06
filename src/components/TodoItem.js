function TodoItem({ completed, id, title, toggleToDo, deleteToDo}) {
  return (
    <li key={id}>
      <label className="task-label">
        <input
          type="checkbox"
          className="form-check-input"
          checked={completed}
          /*  Update task status */
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteToDo(id)}
        className="btn btn-danger"
      >
       <i class="fa fa-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;
