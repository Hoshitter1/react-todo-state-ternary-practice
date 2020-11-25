import React, { useState } from "react";
import TodoItem from "./TodoItem";

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

  function deleteItem(id) {
    setTodoList((prev) => {
      return prev.filter((item, index) => index != id);
    });
  }
  console.log(todoList);
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
          {todoList.map((item, index) => (
            <TodoItem
              onChecked={deleteItem}
              key={index}
              id={index}
              text={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
