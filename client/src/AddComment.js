import React, {useState} from "react";
import Axios from "axios";
import NuForm from "./NuForm";

function AddComment({recipes, setRecipes, editRecipe, handleEditForm, selectedRecipe}) {
  const url="http://localhost:3000/comments"
  const [data, setData] = useState({
    description:"",
    user_id: sessionStorage.getItem("user_id"),
    recipe_id: sessionStorage.getItem("recipe_id"),
  })

  function submit(e) {
    e.preventDefault();
    Axios.post(url,{
      description: data.description,
      user_id: data.user_id,
      recipe_id: data.recipe_id
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
      <h1>Comments</h1>
<form onSubmit={(e)=> submit(e)}>
  <input onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="Add Comment" type="text"></input>

  <input onChange={(e)=>handle(e)} id="user_id" value={data.user_id} placeholder="User" type="number"></input>

  <input onChange={(e)=>handle(e)} id="recipe_id" value={data.recipe_id} placeholder="Recipe ID" type="number"></input>
<button>Submit</button>
</form>
{/* <div>
     <NuForm editRecipe={editRecipe} handleEditForm={handleEditForm} selectedRecipe={selectedRecipe}/>
     </div> */}
    </div>
    
  )
}

export default AddComment;