import React from "react";
import CommentCard from "./CommentCard";

function CommentContainer({ comments, newComments }) {
  return (
    <main>
      <ul className="cards">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            newComments={newComments}
          />
        ))}
      </ul>
    </main>
  );
}

export default CommentContainer;