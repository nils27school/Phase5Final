// import React, { useState } from "react";

// function CommentCard({
//   recipe: { description, recipe_id, user_id },
//   onRemoveRecipe,
// }) {
//   const [favorite, setFavorite] = useState(false);

//       return (
//     <li className="card">
//       <div className="details">
//         {favorite ? (
//           <button
//             onClick={() => setFavorite(false)}
//             className="emoji-button favorite active"
//           >
//             ★
//           </button>
//         ) : (
//           <button
//             onClick={() => setFavorite(true)}
//             className="emoji-button favorite"
//           >
//             ☆
//           </button>
//         )}
//         <h1>{description}</h1>
//         <span> · {recipe_id}</span> 
//         <h2>{user_id}</h2>
      
//         {/* <button onClick={handleDeleteClick} className="emoji-button delete">
//           🗑
//         </button> */}
//       </div>
//     </li>
//   );
// }




// export default CommentCard;

// import React from "react"

// function CommentCard({commentData, removeComment, setSelectedComment}) {
//     const {name, description, id} = commentData

//     function handleDelete() {
//         fetch(`/comment/${id}`, {
//             method: "Delete",
//         })
//         removeComment(id)
//     }

//     function handleClick() {
//         setSelectedComment(commentData)
//     }

// return(
//     <div className="cards">
//         <h3>{name}</h3> 
//         <p>"{description}"</p>
//         <button onClick={handleDelete} className="button">Delete</button>
//         <button type="button" onClick={handleClick} className="button">Edit Comment</button>

//     </div>
// )
// }

// export default CommentCard

import React, { useState } from "react";
import "./Card.css";

function CommentCard({
  comment: {description, user_id, recipe_id},
}) {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="details">
        <h1 className="card-user">{user_id}</h1>
        {/* <span className="card-comment"> {comment_id}</span> */}
        <h2 className="card-description">{description ? description : null}</h2>
        <span className="card-recipe"> {recipe_id}</span>
      </div>
    </li>
  );
}




export default CommentCard;