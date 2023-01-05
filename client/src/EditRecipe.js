import React from "react";

function EditRecipe({ recipe, onUpdateRecipe }) {
  const { id, name, ingredients, description, likes } = recipe;


  function handleLikeClick() {
    const updateObj = {
      likes: recipe.likes + 1,
    };

    fetch(`http://localhost:3001/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateRecipe);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
    </div>
  );
}

export default EditRecipe;