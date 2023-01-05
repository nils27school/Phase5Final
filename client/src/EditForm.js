
import React, {useState} from "react";
import Axios from "axios";


function EditForm(props) {
  const url="http://localhost:3000/recipes"
  const [data, setData] = useState({
    name:"",
    ingredients:"",
    description:"",
    user_id: sessionStorage.getItem("user_id"),
    recipe_id: sessionStorage.getItem("recipe_id")
  })

  function submit(e) {
    e.preventDefault();
    Axios.patch(url,{
      name: data.name,
      ingredients: data.ingredients,
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
      <span>Edit Recipe</span>
<form onSubmit={(e)=> submit(e)}>
  <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
  <input onChange={(e)=>handle(e)} id="ingredients" value={data.ingredients} placeholder="ingredients" type="text"></input>
  <input onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="description" type="text"></input>
  <input onChange={(e)=>handle(e)} id="user_id" value={data.user_id} placeholder="User" type="number"></input>
<input onChange={(e)=>handle(e)} id="recipe_id" value={data.recipe_id} placeholder="Recipe ID" type="number"></input>
<button>Update</button>
</form>
    </div>
  )
}

export default EditForm;