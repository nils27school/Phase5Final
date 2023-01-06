import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Recipes from "./Recipes";
import Comments from "./Comments";
import Register from './Register';
import Logout from "./Logout";
import Header from './Header';
import EditForm from './EditForm';
import NuRecipeMenu from './NuRecipeMenu';
import NuRecipeForm from './NuRecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // const [recipes, setRecipes] = useState([])
  // const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(() => {
      fetch('http://localhost:3000/recipes')
      .then(r => r.json())
      .then(data => setRecipes(data))
  },[])

  // function handleEditForm(name, value) {
  //   setSelectedRecipe({
  //     ...selectedRecipe,
  //     [name]: value,
  //   })
  // }

  // function handleEditRecipe(updatedRecipe) {
  //   const updatedRecipes = recipes.map((recipe) =>
  //     recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  //   );
  //   setSelectedRecipe(updatedRecipe);
  //   setRecipes(updatedRecipes);
  // }



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
  return (
    <div>
      <Header />
      <>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/recipes" element={<Recipes/>}/>
        {/* <Route exact path="/recipes" element={<NuRecipeMenu recipes={recipes} setRecipes={setRecipes} setSelectedRecipe={setSelectedRecipe}/>}/> */}
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/comments" element={<Comments/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        <Route exact path="/recipes/:id/edit" element={<EditForm/>}/>
        {/* <Route exact path="/nuform" element={<NuForm recipes={recipes} setRecipes={setRecipes} editRecipe={handleEditRecipe} handleEditFom={handleEditForm} selectedRecipe={selectedRecipe}/>}/> */}
        {/* recipes={recipes} setRecipes={setRecipes} editRecipe={handleEditRecipe} handleEditForm={handleEditForm} selectedRecipe={selectedRecipe}/>}/> */}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/update" element={<NuRecipeForm recipes={recipes} setRecipes={setRecipes} editRecipe={handleEditRecipe}
        handleEditForm={handleEditForm} selectedRecipe={selectedRecipe}/>}/>

      </Routes>
      </>
    </div>
    
  );
}


export default App;
