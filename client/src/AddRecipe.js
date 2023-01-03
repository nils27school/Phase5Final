// import React, { useState, useEffect } from 'react';
// // import { Redirect } from "react-router-dom"
// import {useNavigate} from "react-router-dom";
// // import EditForm from './EditForm';

// function AddRecipe() {
//   // const navigate = useNavigate();
//   const [postId, setPostId] = useState([])
//   const navigate = useNavigate();
  
//   // if (!authorized) {
//   //     navigate("/") ;
//   // }
//   useEffect(() => {
//     // POST request using fetch inside useEffect React hook
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ title: 'Recipes' })
//     };
//     fetch('/recipes', requestOptions)
//     .then (data => window.sessionStorage.setItem("name", "description", "ingredients", data.id))
//     .then (() => navigate("/addrecipe"));

//   }, []);

//   const handleSubmit = event => {
//     event.preventDefault();
//     alert('You have submitted the form.')
//   }

//   return (
//     <div>
//       {/* <EditForm/> */}
//       <h1>Add Recipe</h1>
//       <form onSubmit={ handleSubmit }>
//         <>
//           <label>
//             Name:
//             <input type="text" name="name" />
//           </label>
//           <label>
//             Ingredients:
//             <input type="text" name="ingredients" />
//           </label>
//           <label>
//             Description:
//             <input type="text" name="description" />
//           </label>
//           <input type="submit" value="Submit" />
//         </>
// </form>
//       </div >
//     );
// }

// export default AddRecipe;

import React, {useState} from "react";
import Axios from "axios";

function AddRecipe(props) {
  const url="http://localhost:3000/recipes"
  const [data, setData] = useState({
    name:"",
    ingredients:"",
    description:"",
    user_id: sessionStorage.getItem("user_id")
  })

  function submit(e) {
    e.preventDefault();
    Axios.post(url,{
      name: data.name,
      ingredients: data.ingredients,
      description: data.description,
      user_id: data.user_id
    })
    .then(res=>{
      console.log(res.data)
          
    })
  }

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return(
    <div>
      <span>Add Recipe</span>
<form onSubmit={(e)=> submit(e)}>
  <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
  <input onChange={(e)=>handle(e)} id="ingredients" value={data.ingredients} placeholder="ingredients" type="text"></input>
  <input onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="description" type="text"></input>
<button>Submit</button>
</form>
    </div>
  )
}

export default AddRecipe;