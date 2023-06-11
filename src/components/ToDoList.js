import React from "react";
import TodoItem from "./TodoItem";

function ToDoList({ todos, delTodo, toogleTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "You Have Completed All Things"}
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            key={todo.id}
            done={todo.done}
            title={todo.title}
            delTodo={delTodo}
            toogleTodo={toogleTodo}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;
