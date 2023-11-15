"use client";

import ItemList from "./item-list.js";
import NewEvent from "./new-item.js";
import MealIdeas from "./meal-ideas.js"; 
import ItemsData from "./items.json";
import { useState } from "react";

export default function Home() {
    let itemsData = ItemsData.map((item) => ({...item}));
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    function handleAddItem(item) {
        setItems([...items, item]);
    }

    function handleItemSelect(selectedItem) {
        const cleanedName = selectedItem.name.trim().toLowerCase(); 
        setSelectedItemName(cleanedName);
    }

    return (
      <main className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
        <div className="min-h-screen flex flex-col md:flex-row md:gap-4">
          <div className="md:w-1/2 p-4">
            <NewEvent onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
          </div>
          <div className="md:w-1/2 p-4">
            <MealIdeas ingredient={selectedItemName}/>
          </div>
        </div>
    </main>
    ); 
}
