import React, { useState } from "react";
import "./Card.css";

function RecipeCard({
  recipe: { id, name, description, ingredients},
  onRemoveRecipe,
}) {
  const [favorite, setFavorite] = useState(false);

  function handleDelete() {
    fetch(`/recipes/${id}`, {
        method: "DELETE"
    })
    onRemoveRecipe(id)
}

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
        <h2 className="card-user_id">{id}</h2>
        <button onClick={handleDelete}>Delete</button>
        

      
        {/* <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button> */}
      </div>
    </li>
  );
}




export default RecipeCard;