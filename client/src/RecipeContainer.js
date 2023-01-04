import React from "react";
import RecipeCard from "./RecipeCard";
import Comment from "./Comments";

function RecipeContainer({ recipes, newRecipes, setRecipes, onRemoveRecipe }) {

  return (
    <main>
      <ul className="cards">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            newRecipes={newRecipes}
            onRemoveRecipe={onRemoveRecipe}
          />
        ))}
        {/* <Comment/> */}
      </ul>
    </main>
  );
}

export default RecipeContainer;