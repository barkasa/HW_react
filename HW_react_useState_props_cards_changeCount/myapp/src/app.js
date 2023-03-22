import React, { useState } from "react";
import ProductItem from "./components/productItem";
import "./app.css";

const App = () => {
  const data = [
    { id: 1, name: "Велосипед", price: 1000, count: 3 },
    { id: 2, name: "Самокат", price: 70, count: 1 },
    { id: 3, name: "Ролики", price: 50, count: 2 },
    { id: 4, name: "Сноуборд", price: 590, count: 4 },
  ];

  const [products, setProducts] = useState(data);

  const addProduct = () => {
    const name = prompt("Enter product's name, please!");
    const price = parseInt(prompt("Enter product's price, please!"));
    const count = parseInt(prompt("Enter product's count, please!"));
    if (name && price && count) {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        count,
      };

      setProducts(products.concat(newProduct));
    }
  };

  const removeProduct = (id) => {
    setProducts(products.filter((el) => el.id !== id));
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <button className="add_button" onClick={addProduct}>
        Add product
      </button>
      <div className="product_conteiner">
        {products.map((el) => (
          <ProductItem
            key={el.id}
            name={el.name}
            price={el.price}
            count={el.count}
            dblClick={() => removeProduct(el.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
