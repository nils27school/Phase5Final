import React, { useState } from "react";
import "./Card.css";
import EditForm from "./EditForm";
import { Navigate, NavLink } from "react-router-dom";

function RecipeCard({
  recipe: { id, name, description, ingredients},
  onRemoveRecipe, user_id,
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
        <h3 className="card-user_id">Recipe ID# {id}</h3>
        <button onClick={handleDelete}>Delete</button>
        <NavLink
        to="/EditForm"
        exact
        // style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Edit
      </NavLink>
      </div>
    </li>
  );
}




export default RecipeCard;