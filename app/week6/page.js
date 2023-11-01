"use client";

import ItemList from "./item-list.js";
import NewEvent from "./new-item.js";
import ItemsData from "./items.json";
import { useState } from "react";

export default function Home() {

    let itemsData=ItemsData.map((item) => ({...item}));
    const [items, setItems] = useState(itemsData);

    function handleAddItem(item) {
      setItems([...items, item])
    }

    return (
      <main className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
      <div className=" min-h-screen">
        <NewEvent onAddItem ={handleAddItem}/>
        <ItemList items={items}/>
      </div>
      </main>
    ); 
  }
  