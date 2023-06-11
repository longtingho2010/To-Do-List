import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

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
      <ToDoForm addItem={addItem} />
      <h1>To Do List</h1>
      <ToDoList todos={todos} toogleTodo={toogleTodo} delTodo={delTodo} />
    </div>
  );
}

export default App;
