"use client"

import Heading from "./heading.js";
import  Item from "./item.js";
import { useState } from "react";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");
  
  
  function handleSortName(){
    setSortBy("name");
  }

  function handleSortCategory(){
    setSortBy("category");
  }

  let SortedList= items.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <>
      <Heading title="shopping list"/>
      <h2 className="text-2xl font-bold m-2 text-yellow-400">Sorted by {sortBy}</h2>
      {SortedList.map((i) => (
        <Item key={i.id} name={i.name} quantity={i.quantity} category={i.category}/>
      ))}
      <button className={`bg-${sortBy === "name" ? "blue" : "gray"}-500 hover:bg-${sortBy === "name" ? "blue" : "gray"}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="submit" onClick={handleSortName}>Sort by Name</button>
      <button className={`bg-${sortBy === "category" ? "blue" : "gray"}-500 hover:bg-${sortBy === "category" ? "blue" : "gray"}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          type="submit" onClick={handleSortCategory}>Sort by Category</button>
    </>
  )
}
