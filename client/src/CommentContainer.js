import React from "react";
import CommentCard from "./CommentCard";

function CommentContainer({ comments, newComment }) {
  return (
    <main>
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
