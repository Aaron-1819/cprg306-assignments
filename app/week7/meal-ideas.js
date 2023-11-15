"use client";

import { useState, useEffect } from "react";
import Heading from "./heading";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || []; 
}

export default function MealIdeas({ ingredient }) { 

    const [meal, setMeal] = useState([]);

    async function loadMealIdeas() {
        const cleanedIngredient = ingredient.split(/[\s,]/)[0];
        try {
            const meals = await fetchMealIdeas(cleanedIngredient);
            setMeal(meals);
        } catch (error) {
            console.error(error);
            setMeal([]); 
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-8">
            <Heading title="Meal Ideas"/>
            <ul className="list-disc pl-5 mt-4">
                {meal && meal.map((m) => ( 
                <li key={m.idMeal} className="text-gray-700 text-lg py-2">{m.strMeal}</li>
                ))}
            </ul>
        </div>

    );
}
