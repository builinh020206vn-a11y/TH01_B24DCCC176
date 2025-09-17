import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white"); 

  return (
    <div style={{ margin: "20px" }}>
      <h3>Bài 2: Đổi màu hình vuông</h3>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("green")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>

      <br /><br />
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: color,
          border: "1px solid black"
        }}
      ></div>
    </div>
  );
}

export default App;
