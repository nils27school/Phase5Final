import React from "react";
import CommentCard from "./CommentCard";

// function CommentContainer({ comments, newComments }) {
//   return (
//     <main>
//       <ul className="cards">
//         {comments?.map((comment) => (
//           <CommentCard
//             key={comment.id}
//             comment={comment}
//             newComments={newComments}
//           />
//         ))}
//       </ul>
//     </main>
//   );
// }



function CommentContainer({comments, setComments, setSelectedComment}) {

    function removeComment(id) {
        const newComments = comments.filter((comment) => comment.id !== id)
        setComments(newComments)
    }

    const commentList = comments.map(comment => {
        return <CommentCard key={comment.id} commentData={comment} removeComment={removeComment} setSelectedComment={setSelectedComment}/>
    })

    return(
        <div className="container">
            <h2 id="menu-title">Comments</h2>
            <div >
                <div className="cards">
                    {commentList}
                </div>
            </div>
        </div>
    )
}



export default CommentContainer;