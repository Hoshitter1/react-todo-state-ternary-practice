import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(["A Item"]);
  const [itemValue, setItemValue] = useState("");

  function pushItem() {
    setTodoList((prevItem) => [...prevItem, itemValue]);
    setItemValue("");
  }

  function getChange(event) {
    const { value } = event.target;
    setItemValue(value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          value={itemValue}
          onChange={getChange}
          name="itemInput"
          type="text"
        />
        <button onClick={pushItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
