import React, { useState } from "react";

function RecipeCard({
  recipe: { id, name, description, ingredients, user_id },
  onRemoveRecipe,
}) {
  const [favorite, setFavorite] = useState(false);

      return (
    <li className="card">
      <div className="details">
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <h1>{name}</h1>
        <span> · {ingredients}</span> 
        <h2>{description}</h2>
      
        {/* <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button> */}
      </div>
    </li>
  );
}




export default RecipeCard;