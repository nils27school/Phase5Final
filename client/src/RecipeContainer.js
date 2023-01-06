import React from "react";
import RecipeCard from "./RecipeCard";
// import Comments from "./Comments";
import EditRecipe from "./EditRecipe";

function RecipeContainer({ recipes, newRecipes, setRecipes, onRemoveRecipe, handleRecipeUpdate }) {

  console.log(recipes)
  return (
    <main>
      <ul className="cards">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            newRecipes={newRecipes}
            onRemoveRecipe={onRemoveRecipe}
            handleRecipeUpdate={handleRecipeUpdate}
          />
        ))}
        {/* <Comments/> */}
      </ul>
    </main>
  );
}

export default RecipeContainer;