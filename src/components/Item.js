import React, { useState } from "react";

function Item({ name, category }) {
  const [isCart, setCart] = useState(false);

  function click() {
    setCart((isCart) => !isCart);
  }
  const itemCart = isCart ? "in-cart" : "";

  const textButton = isCart ? "Remove From Cart" : "Add to Cart";
  const style = isCart ? "purple" : "";
  return (
    <li className={itemCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={click} className="add" style={{ backgroundColor: style }}>
        {textButton}
      </button>
    </li>
  );
}

export default Item;
