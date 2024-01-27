import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {


  const [selectedCategory, setCategory] = useState("All")

  function handleFilter(e) {
    console.log(e.target.value);
    setCategory(e.target.value)
  }

  function filteredList(items) {
    return items.filter(item => {
      return selectedCategory === "All" || item.category === selectedCategory;
    });
  }

  const filteredItems = filteredList(items)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
