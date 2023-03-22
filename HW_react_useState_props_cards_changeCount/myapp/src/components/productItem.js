import React, { useState } from "react";

import "./productItem.css";

const ProductItem = ({ name, price, count: initialCount, dblClick }) => {
  const [count, setCount] = useState(initialCount);

  const handleDoubleClick = (event) => {
    if (event.target.className === "count_btn") {
      return;
    }
    dblClick();
  };

  return (
    <div
      className={`product_card ${count <= 0 ? "out_of_stock" : ""}`}
      onDoubleClick={handleDoubleClick}
    >
      <h3>{name}</h3>
      <p>{`${price}$`}</p>
      <div className="card_btn">
        <button className="count_btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <span>{count}</span>
        <button
          className="count_btn"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
