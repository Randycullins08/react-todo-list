import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const addItems = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Enter an input");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: inputValue,
    };

    setTodoItems((prev) => [...prev, item]);
    setInputValue("");
  };

  const deleteItems = (id) => {
    const newArray = todoItems.filter((item) => item.id !== id);
    setTodoItems(newArray);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>To Do List</h1>
        </div>
      </header>
      <div>
        <form onSubmit={addItems}>
          <input
            id="Todo"
            name="Todo"
            placeholder="Text here"
            value={inputValue || ""}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add Todo Item</button>
        </form>

        <ul>
          {todoItems.map((item) => (
            <li key={item.id}>
              {item.value}
              <button
                onClick={() => deleteItems(item.id)}
                className="delete-button"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
