import React, { useEffect, useState } from "react";
import RecipeContainer from "./RecipeContainer";
import './App.css';
import AddRecipe from "./AddRecipe";
import EditForm from "./EditForm";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({})

useEffect(() => {
  fetch('/recipes')
  .then((r) => r.json())
  .then((data) => setRecipes(data));
}, []);

  const displayedRecipes = recipes.filter((recipe) =>
    recipe.description.toLowerCase().includes(search.toLowerCase())
  );


    function deleteRecipe(id) {
      const updatedRecipes = recipes.filter(todo => todo.id !== id)
      setRecipes(updatedRecipes)
  }


  return (
    <>
    <div className="recipes" style={{backgroundColor: 'tan', color: 'white}}'}}>
      {/* <SearchBar onSearch={search} /> */}
      <RecipeContainer
        recipes={displayedRecipes} 
        onRemoveRecipe={deleteRecipe}
      />
      <AddRecipe/>
      {/* <EditForm/> */}
    </div>
    </>
  );
  }

export default Recipes;