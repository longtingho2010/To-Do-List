import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addItem = (title) => {
    setTodos((currentValue) => {
      return [
        { id: Math.floor(Math.random() * 100000), title, done: false },
        ...currentValue,
      ];
    });
  };

  const toogleTodo = (id, done) => {
    setTodos((currentValue) => {
      return currentValue.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }
        return todo;
      });
    });
  };

  const delTodo = (id) => {
    setTodos((currentValue) => {
      return currentValue.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="app">
      <h1>To Do List</h1>
      <ToDoForm addItem={addItem} />
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(e) => toogleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button onClick={() => delTodo(todo.id)} className="btn btn-del">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
