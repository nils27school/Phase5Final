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