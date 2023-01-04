// import React, {useState, useEffect} from 'react';
// // import { Redirect } from "react-router-dom"
// import {useNavigate} from "react-router-dom";
// import SearchBar from './SearchBar';

// import RecipeCard from './RecipeCard';



// function Recipes() {
//     // const navigate = useNavigate();
//     // const [recipes, setRecipes] = useState([]);

//     // useEffect(() => {
//     //     fetch("http://localhost:3000/recipes")
//     //     .then(res => res.json())
//     //     .then(data => setRecipes(data))
//     //   }, []);
//     // // if (!authorized) {
//     //     navigate("/") ;
//     // }
//     return (
//       <div>
//         <SearchBar/>
//         {/* <RecipeCard/> */}
//         <h1>This is my recipes component!</h1>
//       </div>
//     );
//   }

  
//   export default Recipes;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import RecipeContainer from "./RecipeContainer";
import SearchBar from "./SearchBar";
import './App.css';
import AddRecipe from "./AddRecipe";

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
        // newRecipe={newRecipe}
      />
      <AddRecipe/>
    </div>
    </>
  );
  }

export default Recipes;