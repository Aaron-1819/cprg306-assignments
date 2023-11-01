"use client";


import { useState } from "react";

export default function NewEvent({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        onAddItem(item);
        
        setName("");
        setQuantity("1");
        setCategory("Produce");
    }

    return (
        <main className="min-h-0 bg-blue-gray-100 flex items-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">New Item</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        required
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
                        Quantity:
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantity"
                        type="number"
                        min="1"
                        max="99"
                        required
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
                        Category:
                    </label>
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        required
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Add Item
                </button>
            </form>
        </main>
    );
}
                       
                    
