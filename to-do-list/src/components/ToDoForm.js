import React, { useState } from "react";

function ToDoForm({ addItem }) {
  const [newItem, setNewItem] = useState("");

  const handleChange = ({ target }) => {
    setNewItem(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem !== "") {
      addItem(newItem);
    }

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={handleChange} type="text" id="item" />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}

export default ToDoForm;
