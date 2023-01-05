import React from "react";
import CommentCard from "./CommentCard";

function CommentContainer({ comments, newComment }) {
  return (
    <main>
      <div class="row">
    <div class="column"></div>
    <div class="column"></div>
  </div>
      <ul className="cards">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            newComment={newComment}
          />
        ))}
      </ul>
    </main>
  );
}

export default CommentContainer;
