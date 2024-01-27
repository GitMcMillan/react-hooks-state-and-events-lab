import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)

  const handleCart = () => {
    setCart(inCart => !inCart)

  }

  const liClass = inCart ? "in-cart" : ""
  const btnClass = inCart ? "remove" : "add"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
