// import React, { useState, useEffect } from 'react';
// // import { Redirect } from "react-router-dom"
// import {useNavigate} from "react-router-dom";
// import CommentContainer from "./CommentContainer"




// function Comment() {
//   // const navigate = useNavigate();
//   const [postId, setPostId] = useState([])
//   const navigate = useNavigate();
//   const [comments, setComments] = useState([]);
//   const [search, setSearch] = useState("");
//   // if (!authorized) {
//   //     navigate("/") ;
//   // }
//   useEffect(() => {
//     fetch('/comment')
//     .then((r) => r.json())
//     .then((data) => setComments(data));
//   }, []);



//   useEffect(() => {
//     // POST request using fetch inside useEffect React hook
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: 'Comments' })
//     };
//     fetch('/recipes', requestOptions)
//     .then (data => window.sessionStorage.setItem("name", "description", "ingredients", data.id))
//     .then (() => navigate("/Comment"));

//   }, []);

//   const handleSubmit = event => {
//     event.preventDefault();
//     alert('You have submitted the form.')
//   }

//   const displayedComments = comments.filter((comment) =>
//   comment.description.toLowerCase().includes(search.toLowerCase())
// );

// import React, { useState } from "react"
// // import EditForm from "./EditForm"

// function CommentList({ comments, setComments, editComment, handleEditForm, selectedComment }) {
//   const [formData, setFormData] = useState('')

//   function handleInput(e) {
//     const { name, value } = e.target
//     setFormData({
//       ...formData, [name]: value,
//     })
//   }
//   function handleInput2(e) {
//     const { name, value } = e.target
//     setFormData({
//       ...formData, [name]: parseInt(value),
//     })
//   }

//   function addComment(e) {
//     e.preventDefault()
//     const newComment = {
//       name: formData.name,
//       description: formData.description,
//       ingredients: formData.ingredients
//     }
//     fetch('/comment', {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newComment)
//     })
//       .then(r => r.json())
//       .then(data => updateComments(data))
//   }

//   function updateComments(newComment) {
//     setComments([...comments, newComment])
//   }

//   return (
//     <div>
//       <h1 className="page-title">Add Comment</h1>
//       <div>
//         <h3> Comment Form:</h3>      
//         <form onSubmit={addComment} className="form">
//         <div>
//           <label>
//             Name:
//             <input type="text" name="user_id" onChange={handleInput2} className="form-box"/>
//           </label>
//           </div>
//           <div>
//           <label>
//             Recipe:
//             <input type="text" name="recipe_id" onChange={handleInput2} />
//           </label>
//           </div>
//           <div>
//           <label>
//             Description:
//             <input type="text" name="description" onChange={handleInput}/>
//           </label>
//           </div>
//           <input type="submit" value="Submit" />
//       </form>
//       </div >
//       <div>
//        {/* <EditForm editComment={editComment} handleEditForm={handleEditForm} selectedComment={selectedComment}/> */}
//       </div>
//       </div>
//   );
// }

// export default CommentList;

import React, { useEffect, useState } from "react";
import CommentContainer from "./CommentContainer";
import './App.css';
import AddComment from "./AddComment";

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
    <>
      <div className="comments" style={{ backgroundColor: 'tan', color: 'white}}' }}>
        <CommentContainer displayedComments={displayedComments} comments={comments}/>
        <AddComment />
      </div>
    </>
  );
}

export default Comments;