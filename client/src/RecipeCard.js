// import React from "react"

// function RecipeCard({recipeData, removeRecipe, setSelectedRecipe}) {
//     const {name, ingredients, description, id} = recipeData

//     function handleDelete() {
//         fetch(`http://localhost:3000/recipes/${id}`, {
//             method: "Delete",
//         })
//         removeRecipe(id)
//     }

//     function handleClick() {
//         setSelectedRecipe(recipeData)
//     }

// return(
//     <div className="cards">
//         <h3>{name}</h3> 
//         {/* <img src={require(`../Assets/${image}.jpg`)} alt="Cocktail" className="cocktail_image"/> */}
//         <p>"{description}"</p>
//         <h4>Ingredients:</h4>
//         <p>- {ingredients}</p>
//         <button onClick={handleDelete} className="button">Delete</button>
//         <button type="button" onClick={handleClick} className="button">Edit Recipe</button>

//     </div>
// )
// }

// export default RecipeCard;