import React, { useEffect, useState } from "react";
import RecipeContainer from "./RecipeContainer";
import './App.css';
import AddRecipe from "./AddRecipe";
import EditForm from "./EditForm";
import NuForm from "./NuForm";


function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({})

useEffect(() => {
  fetch('/recipes')
  .then((r) => r.json())
  .then((data) => setRecipes(data));
}, []);
console.log(recipes)

  const displayedRecipes = recipes.filter((recipe) =>
    recipe.description.toLowerCase().includes(search.toLowerCase())
  );


    function deleteRecipe(id) {
      const updatedRecipes = recipes.filter(todo => todo.id !== id)
      setRecipes(updatedRecipes)
  }
  function handleEditForm(name, value) {
    setSelectedRecipe({
      ...selectedRecipe,
      [name]: value,
    })
  }

  function handleEditRecipe(updatedRecipe) {
    const updatedRecipes= recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setSelectedRecipe(updatedRecipe);
    setRecipes(updatedRecipes);
  }
  // function onUpdateRecipe(updatedRecipe) {
  //   const nuRecipes = recipes.map(
  //     recipe => {
  //       if (recipe.id === updatedRecipe.id) {
  //         return updatedRecipe
  //       } else {return recipe}
  //     }
  //   )
  //   setRecipes(nuRecipes)
  // }

  return (
    <>
    <div className="recipes" style={{backgroundColor: 'tan', color: 'white}}'}}>
      {/* <SearchBar onSearch={search} /> */}
      <RecipeContainer
        recipes={displayedRecipes} 
        onRemoveRecipe={deleteRecipe}
        recipe={recipes}
        handleEditForm={handleEditForm}
        handleEditRecipe={handleEditRecipe}
        // onUpdateRecipe={onUpdateRecipe}
      />
      <AddRecipe />
      {/* <EditForm/> */}
      {/* console.log() */}
      {/* <NuForm  handleEditForm={handleEditForm}
        handleEditRecipe={handleEditRecipe}/> */}
    </div>
    </>
  );
  }

export default Recipes;