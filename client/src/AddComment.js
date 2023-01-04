import React, {useState} from "react";
import Axios from "axios";

function AddComment(props) {
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
      <span>Add Comment</span>
<form onSubmit={(e)=> submit(e)}>
  <input onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="description" type="text"></input>

  <input onChange={(e)=>handle(e)} id="user_id" value={data.user_id} placeholder="user" type="number"></input>

  <input onChange={(e)=>handle(e)} id="recipe_id" value={data.recipe_id} placeholder="recipe" type="number"></input>
<button>Submit</button>
</form>
    </div>
  )
}

export default AddComment;