import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeContainer({ recipes, newRecipes }) {
  return (
    <main>
      <ul className="cards">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            newRecipes={newRecipes}
          />
        ))}
      </ul>
    </main>
  );
}

export default RecipeContainer;