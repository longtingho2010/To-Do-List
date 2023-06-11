import React from "react";

function TodoItem({ id, done, title, toogleTodo, delTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => toogleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => delTodo(id)} className="btn btn-del">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
