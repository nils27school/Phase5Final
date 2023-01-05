import React, { useEffect, useState } from "react";
import CommentContainer from "./CommentContainer";
import './App.css';
import AddComment from "./AddComment";
import "./Card.css";

function Comments() {
  const [comments, setcomments] = useState([]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/comments')
      .then((r) => r.json())
      .then((data) => setcomments(data));
  }, []);

  const displayedComments = comments.filter((comment) =>
    comment.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div class="ui four cards">
      <div className="comments" style={{ backgroundColor: 'tan', color: 'white}}' }}>
      <AddComment />
        <CommentContainer displayedComments={displayedComments} comments={comments}/>
        </div>
      </div>
   
  );
}

export default Comments;

