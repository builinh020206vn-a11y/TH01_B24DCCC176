import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);   
  const [input, setInput] = useState("");   
  const addTask = () => {
    if (input.trim() === "") return;     
    setTasks([...tasks, input]);           
    setInput("");                           
  };
  const deleteTask = (index) => {
  const newTasks = tasks.filter((task, i) => i !== index);
  setTasks(newTasks);
  };


  return (
    <div style={{ margin: "20px" }}>
      <h3>Bài 1: To-do List</h3>
      <input
        type="text"
        placeholder="Nhập công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => deleteTask(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

