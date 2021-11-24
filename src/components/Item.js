import React, { useState } from "react";


function Item({ name, category }) {

  const [item, setAddItem] = useState(false)
  const itemClass = item ? "in-cart" : ""
  
  function handleItem() {
    setAddItem(!item)
  }



  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>{!item ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
