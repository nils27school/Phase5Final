import React, { useState, useEffect } from 'react';
import './App.css';
// import { Login } from "./Login";
// import { Register } from "./Register";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Recipes from "./Recipes";
import CommentList from "./CommentList";
import Register from './Register';
import Logout from "./Logout";
import AddRecipe from "./AddRecipe";
import Header from './Header';



function App() {
  const [comments, setComments] = useState([])
  const [selectedComment, setSelectedComment] = useState(null)

  useEffect(() => {
      fetch('/comment')
      .then(r => r.json())
      .then(data => setComments(data))
  },[])

  function handleEditForm(name, value) {
    setSelectedComment({
      ...selectedComment,
      [name]: value,
    })
  }

  function handleEditComment(updatedComment) {
    const updatedComments = comments.map((comment) =>
      comment.id === updatedComment.id ? updatedComment : comment
    );
    setSelectedComment(updatedComment);
    setComments(updatedComments);
  }


  
  return (
    <div>
      <Header />
      <>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/recipes" element={<Recipes/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/commentList" element={<CommentList comments={comments} setComments={setComments} setSelectedComment={setSelectedComment} editComment={handleEditComment}/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        <Route exact path="/addrecipe" element={<AddRecipe/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </>
    </div>
    
  );
}


export default App;




//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (forName) => {
//     setCurrentForm(forName);
//   }
  

//   return (
//     <>
//     <div className="App">
//       <Navbar/>
//       {/* <div className="container">{component}</div> */}
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
//       }
//     </div>
//     </>
//   );
// }

