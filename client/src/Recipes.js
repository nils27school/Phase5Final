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



  // function handleRemoveRecipes(id) {
  //   const newRecipes = recipes.filter((recipe) => recipe.id !== id);
  //   setRecipes(newRecipes);
  // }


  
  // const handleSubmit = (e) => {
  //   e.preventDefault();

//     fetch("http://localhost:3000/recipes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ ...formData })
//     })
//       .then(res => res.json())
//       .then(newRecipe => setRecipes(
//         [...recipes, newRecipe]))
  
//       setFormData(newRecipe);
// };


  const displayedRecipes = recipes.filter((recipe) =>
    recipe.description.toLowerCase().includes(search.toLowerCase())
  );

  // function newRecipeForm({ addedRecipe }) {
   
  
  
    // const handleOnChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({
      
    //       ...formData,
    //       [name]: value
       
    // })
    // }

  return (
    <>
    <div className="recipes" style={{backgroundColor: 'tan', color: 'white}}'}}>
      {/* <SearchBar onSearch={search} /> */}
      <RecipeContainer
        recipes={displayedRecipes}
        // newRecipe={newRecipe}
      />
      <AddRecipe/>
    </div>
    </>
  );
  }

export default Recipes;