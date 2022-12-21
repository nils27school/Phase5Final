
// import React from "react";
// import RecipeCard from "./RecipeCard"

// function RecipeMenu({recipes, setRecipes, setSelectedRecipe}) {

//     function removeRecipe(id) {
//         const newRecipes = recipes.filter((recipe) => recipe.id !== id)
//         setRecipes(newRecipes)
//     }

//     const recipeList = recipes.map(recipe => {
//         return <RecipeCard key={recipe.id} recipeData={recipe} removeRecipe={removeRecipe} setSelectedRecipe={setSelectedRecipe}/>
//     })

//     return(
//         <div className="container">
//             <h2 id="menu-title">Recipe Menu</h2>
//             <div >
//                 <div className="cards">
//                     {recipeList}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default RecipeMenu;