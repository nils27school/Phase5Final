import React, { useState, Component } from "react";

function RecipeCard({
  recipe: { id, name, description, ingredients, user_id },
  onRemoveRecipe,
}) {
  const [favorite, setFavorite] = useState(false);

  // function handleDeleteClick() {
  //   fetch(`http://localhost:3000/recipes/${id}`, {
  //     method: "DELETE",
  //   });
  //   onRemoveRecipe(id);
  // }
class RecipeCard extends Component {
  render() {
    const { name, description, ingredients, email} = this.props
    const ulStyle = {border: '2px solid green', width:'40%', listStyleType:'none'}
    const liStyle = {color : 'blue', fontSize:'23px'}
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
             <ul style={ulStyle}>
        <li style={liStyle}>Name : {name}</li>
        <li style={liStyle}>Description: {description}</li>
        <li style={liStyle}>Ingredients: {ingredients}</li>
        <li style={liStyle}>Email : {email}</li>
      </ul>
    
  
        {/* <h1>{name}</h1>
        <h2>{description}</h2>
        <span> · {ingredients}</span> */}
        {/* <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button> */}
      </div>
    </li>
  );
}
}
}


export default RecipeCard;