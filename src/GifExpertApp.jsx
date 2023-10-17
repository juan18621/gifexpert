import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Puch', 'Dragon Ball'])

    const addCategory = (newCategory) => {
        categories.includes(newCategory) ? null: setCategories([newCategory, ...categories])
    }
    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategory onAddCategory={addCategory} />
        <ol>
            {categories.map(category => <GifGrid key={new Date().getTime() + Math.random()} category={category}/> )}
        </ol>
        </>
    );
}