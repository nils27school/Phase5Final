import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


function Comment() {

    // if (!authorized) {
    //     return <Redirect to="/" />;
   const [comment, setComment] = useState("")
   const [comments, setComments] = useState([]);
   const navigate = useNavigate();

   const onClickHandler = () => {
    setComments((comments) => [...comments, comment])
   };
   const onChangeHandler = (e) => {
    setComment(e.target.value);
   };


   const handleComments = (e) => {
    e.preventDefault();
    // console.log(email);
    fetch("/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comments }),
      })
        .then(r => {
            if (r.ok) {
                r.json()
                .then (data => window.sessionStorage.setItem("user_id", data.id))
                .then (() => navigate("/comments"))
            }
        })
    }    
    return (
      <div className="main-container">
        {comments.map((text) =>(
            <div className="comment-container">{text}</div>
        ))}
   
        <div className = "comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea 
            value={comment} 
            onChange={onChangeHandler} 
            className ="input-box"/>
        <button onClick={onClickHandler} className="comment-button">Submit</button>
        </div>
      </div>
    );
  }

  export default Comment;