// import React, {useState, useEffect} from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import RecipeMenu from './RecipeMenu';
// import RecipeForm from './RecipeForm';
// import RecipeCard from './RecipeCard';


// function Recipes() {
    
//     const [recipes, setRecipes] = useState([])
//     const [selectedRecipe, setSelectedRecipe] = useState(null)
  
//     useEffect(() => {
//         fetch(`http://localhost:3000/recipes/`)
//         .then(r => r.json())
//         .then(data => setRecipes(data))
//     },[])
  
//     function handleEditForm(name, value) {
//       setSelectedRecipe({
//         ...selectedRecipe,
//         [name]: value,
//       })
//     }
  
//     function handleEditRecipe(updatedRecipe) {
//       const updatedRecipes = recipes.map((recipe) =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       );
//       setSelectedRecipe(updatedRecipe);
//       setRecipes(updatedRecipes);
//     }

//     // if (!authorized) {
//     //     return <Redirect to="/" />;
   
//     return (
//         <div className="Recipes">
//           <BrowserRouter>
           
//             <Routes>
//               <Route exact path= "/" element={<RecipeMenu recipes={recipes} setRecipes={setRecipes} setSelectedRecipe={setSelectedRecipe}/>}/>
//               <Route path="/suggestRecipe" element={<RecipeForm recipes={recipes} setRecipes={setRecipes} editRecipe={handleEditRecipe} handleEditForm={handleEditForm} selectedRecipe={selectedRecipe}/>}/>
//             </Routes>
//           </BrowserRouter>
//         </div>
//       );
//     }

//   export default Recipes;

import React from 'react';
// import { Redirect } from "react-router-dom"
import {useNavigate} from "react-router-dom";

function Recipes() {
    const navigate = useNavigate();

    // if (!authorized) {
    //     navigate("/") ;
    // }
    return (
      <div>
        <h1>This is my recipes component!</h1>
      </div>
    );
  }

  export default Recipes;