// // import React from "react"

// // function RecipeCard({recipeData, removeRecipe, setSelectedRecipe}) {
// //     const {name, ingredients, description, id} = recipeData

// //     function handleDelete() {
// //         fetch(`http://localhost:3000/recipes/${id}`, {
// //             method: "Delete",
// //         })
// //         removeRecipe(id)
// //     }

// //     function handleClick() {
// //         setSelectedRecipe(recipeData)
// //     }

// // return(
// //     <div className="cards">
// //         <h3>{name}</h3> 
// //         {/* <img src={require(`../Assets/${image}.jpg`)} alt="Cocktail" className="cocktail_image"/> */}
// //         <p>"{description}"</p>
// //         <h4>Ingredients:</h4>
// //         <p>- {ingredients}</p>
// //         <button onClick={handleDelete} className="button">Delete</button>
// //         <button type="button" onClick={handleClick} className="button">Edit Recipe</button>

// //     </div>
// // )
// // }

// // export default RecipeCard;



// import React from "react";
// const RecipeCard = ({ recipe }) => {
//     const {
//         idMeal,
//         strMeal,
//         strCategory,
//         strMealThumb,
//     } = recipe;
    
//     return (
//         <div className="card">
//             <img
//                 src={strMealThumb}
//                 alt={strMeal}
//                 className="card-image"
//             />
//             <div className="card-body">
//                 <span className="category">{strCategory}</span>
//                 <h3>{strMeal}</h3>
//                 <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
//             </div>
//         </div>
//     )
// };

// export default RecipeCard;