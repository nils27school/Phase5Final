import React, { useState, useEffect } from 'react';
// import { Redirect } from "react-router-dom"
import {useNavigate} from "react-router-dom";
// import EditForm from './EditForm';

function AddRecipe() {
  // const navigate = useNavigate();
  const [postId, setPostId] = useState([])
  const navigate = useNavigate();
  
  // if (!authorized) {
  //     navigate("/") ;
  // }
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Recipes' })
    };
    fetch('/recipes', requestOptions)
    .then (data => window.sessionStorage.setItem("name", "description", "ingredients", data.id))
    .then (() => navigate("/addrecipe"));

  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return (
    <div>
      {/* <EditForm/> */}
      <h1>Add Recipe</h1>
      <form onSubmit={ handleSubmit }>
        <>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Ingredients:
            <input type="text" name="ingredients" />
          </label>
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <input type="submit" value="Submit" />
        </>
</form>
      </div >
    );
}

export default AddRecipe;