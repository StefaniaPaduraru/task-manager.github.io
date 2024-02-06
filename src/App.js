import "./App.css";
import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  /*
  The useEffect Hook allows you to perform side effects in components.
  useEffect accepts two arguments. The second argument is optional.
  useEffect(<function>, <dependency>)
  */
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  ///The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
  ///addTodo function adds a new object to the currentTodos array and updates its state using setTodos.
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }];
    });
  }
  
  //toggleToDo function is used to mark a todo item as completed or incomplete
  function toggleToDo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }
  //deleteToDo function deletes a todo item
  function deleteToDo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
    <Header/>
    <div class="container p-5 my-5 bg-dark text-white">
      <NewTodoForm onSubmit={addTodo} />
      <h2 class="text-center">ToDo List</h2>
      <TodoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </div>
    </>
  );
}

export default App;
