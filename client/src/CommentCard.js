import React, { useState } from "react";
import "./Card.css";

function CommentCard({
  comment: {description, user_id, recipe_id},
}) {
  const [favorite, setFavorite] = useState(false);

  return (
    <li className="card">
      <div className="details">
        {/* <h1 className="card-user">{user_id}</h1> */}
        {/* <span className="card-comment"> {comment_id}</span> */}
        <h1 className="card-description">{description ? description : null}</h1>
        <span className="card-recipe">Recipe ID# {recipe_id}</span>
      </div>
    </li>
  );
}




export default CommentCard;