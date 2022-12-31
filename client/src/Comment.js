import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import CommentContainer from './CommentContainer'


function Comment() {

    // if (!authorized) {
    //     return <Redirect to="/" />;
   const [comment, setComment] = useState("")
   const [comments, setComments] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
    fetch('/comment')
    .then((r) => r.json())
    .then((data) => setComments(data));
  }, []);

   const onClickHandler = () => {
    setComments((comments) => [...comments, comment])
   };
   const onChangeHandler = (e) => {
    setComment(e.target.value);
   };

  //  const displayedComments = comments.filter((comment) =>
  //  comment.description.toLowerCase().includes(search.toLowerCase())
//  );
   const handleComments = (e) => {
    e.preventDefault();
    // console.log(email);
    fetch("/comment", {
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
                .then (() => navigate("/comment"))
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
            value={handleComments} 
            onChange={onChangeHandler} 
            className ="input-box"/>
        <button onClick={onClickHandler} className="comment-button">Submit</button>
        </div>
     
          <>
          <div className="app">
            
            <CommentContainer
              // comments={displayedComments}
              // newRecipe={newRecipe}
            />
          </div>
          </>
          </div>
        );
        }
   
  

  export default Comment;