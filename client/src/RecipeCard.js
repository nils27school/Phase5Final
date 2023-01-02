import React, { useState } from "react";
import "./Card.css";

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
        <h1 className="card-name">{name}</h1>
        <span className="card-ingredients"> {ingredients}</span> 
        <h2 className="card-description">{description}</h2>
      
        {/* <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button> */}
      </div>
    </li>
  );
}




export default RecipeCard;