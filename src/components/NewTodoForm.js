import { useState } from "react";

function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  ///The function used to handle the submit event and manage user input
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    ///Props are arguments passed into React components
    props.onSubmit(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className="form-label">
        </label>
        <input
          type="text"
          id="item"
          className="form-control"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          placeholder="Enter your task here..."
        />
      </div>
      <button className="btn btn-success">Add new task!</button>
    </form>
  );
}

export default NewTodoForm;
