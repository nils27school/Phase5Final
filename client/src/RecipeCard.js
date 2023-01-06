import React, { useState } from "react";
import "./Card.css";
import EditForm from "./EditForm";
import { Navigate, NavLink } from "react-router-dom";
import EditRecipe from "./EditRecipe";
import NuForm from "./NuForm";

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
console.log(id)
// function handleUpdate({ editForm, handleRecipeUpdate, handleChange }) {
//   let {id, name, ingredients, description} = editForm

//   function handleEditForm(e) {
//       e.preventDefault();
//       fetch(`/recipes/${id}`, {
//           method: "PATCH",
//           headers: {
//               "Content-Type" : "application/json"
//           },
//           body: JSON.stringify(editForm),
//       })
//           .then(resp => resp.json())
//           .then(updatedRecipe => {
//               handleRecipeUpdate(id)})
//   }



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
        {/* <form onSubmit={handleEditForm}> */}
                {/* <input type="text" name="name" value={name} onChange={handleChange}/>
                <input type="text" name="ingredients" value={ingredients} onChange={handleChange}/>
                <input type="text" name="description" value={description} onChange={handleChange}/>
                <button type="submit">Submit Changes</button> */}
            {/* </form> */}
        <button onClick={handleDelete}>Delete</button>
        {/* <NuForm/> */}
        {/* <button onClick={handleUpdate}>Update</button> */}
        <NavLink
        to={`/recipes/${id}/edit`}
        exact
        // style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Edit
      </NavLink>
      {/* <EditForm id={id} name={name} description={description} ingredients={ingredients} user_id={user_id} /> */}
      </div>
    </li>
  );
}





export default RecipeCard;