"use client";

import Heading from "./heading.js";
import Item from "./item.js";
import { useState } from "react";

export default function ItemList({items, onItemSelect}) {
  const [sortBy, setSortBy] = useState("name");
  
  function handleSortName(){
    setSortBy("name");
  }

  function handleSortCategory(){
    setSortBy("category");
  }

  let SortedList = items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <>
      <Heading title="Shopping List"/>
      <button className={`bg-${sortBy === "name" ? "blue" : "gray"}-500 hover:bg-${sortBy === "name" ? "blue" : "gray"}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="button" onClick={handleSortName}>Sort by Name</button>
      <button className={`bg-${sortBy === "category" ? "blue" : "gray"}-500 hover:bg-${sortBy === "category" ? "blue" : "gray"}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="button" onClick={handleSortCategory}>Sort by Category</button>
      {SortedList.map((item) => (
        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)}/>
      ))}
    </>
  )
}
