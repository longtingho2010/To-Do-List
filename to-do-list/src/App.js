import "./App.css";

function App() {
  return (
    <div className="app">
      <form className="new-item">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1>To Do List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            item 1
          </label>
          <button className="btn btn-del">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            item 1
          </label>
          <button className="btn btn-del">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
