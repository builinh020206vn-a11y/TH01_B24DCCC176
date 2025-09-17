import React, { useState } from "react";

function App() {
  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 }
  ];
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]); 
  };
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  return (
    <div style={{ margin: "20px" }}>
      <h3>Sản phẩm</h3>
      {products.map((p, index) => (
        <div key={index}>
          {p.name} - {p.price}đ{" "}
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}

      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}đ
          </li>
        ))}
      </ul>

      <p><b>Tổng tiền:</b> {total}đ</p>
    </div>
  );
}

export default App;

