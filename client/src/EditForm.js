
import React, {useState, useEffect} from "react";
import Axios from "axios";
import { useParams} from "react-router-dom";


function EditForm({name, description, ingredients, user_id}) {
    const {id} = useParams();
  

    // const [nameValue, setNameValue] = useState(name);
    // const [descriptionValue, setDescriptionValue] = useState(description);
    // const [ingredientsValue, setIngredientsValue] = useState(ingredients);
  const url=`http://localhost:3000/recipes/${id}`
  const [data, setData] = useState({
    name:"",
    ingredients:"",
    description:"",
    user_id: sessionStorage.getItem("user_id"),
    id: id
  })

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
    .then(response => response.json())
    .then(data => setData({name: data.name, ingredients: data.ingredients, description: data.description, user_id: data.user_id, id: id}))
  },[])

  function submit(e) {
    e.preventDefault();
    Axios.patch(url,{
      name: data.name,
      ingredients: data.ingredients,
      description: data.description,
      user_id: data.user_id,
      id: data.id
    })
    .then(res=>{
      setData(res.data)
          
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
<input onChange={(e)=>handle(e)} id="id" value={data.id} placeholder="Recipe ID" type="number"></input>
<button type="submit">Update</button>
</form>
    </div>
  )
}

export default EditForm;

// import React from "react"

// function EditForm({id, editRecipe, handleEditForm, selectedRecipe}) {

//     function handleInputChange(e) {
//         handleEditForm(e.target.name, e.target.value)
//     }

//     // function handleInput2(e) {
//     //     const {name, value} = e.target
//     //     handleEditForm(name, parseInt(value))
//     // }

//     function handleSubmit(e) {
//         e.preventDefault();
//         fetch(`http://localhost:3000/recipes/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(selectedRecipe),
//         })
//         .then(r => r.json())
//         .then(editRecipe)
//     }

//     if (!selectedRecipe) return null;

//     const {name, description, ingredients} = selectedRecipe

//     return(
//         <div>
//             <h3>Edit Recipe Details:</h3>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                 <label>Name:</label>
//                 <input name="name" placeholder="Recipe Name Here" value={name} type="text" onChange={handleInputChange}/>
//                 </div>
//                 <div>
//                 <label>Description:</label>
//                 <input name="description" placeholder="enter description here" value={description} type="text" onChange={handleInputChange}/>
//                 </div>
//                 <div>
//                 <label>Ingredients:</label>
//                 <input name="ingredients" placeholder="list ingredients here" type="text" value={ingredients} onChange={handleInputChange}/>
//                 </div>
//                 <input type="submit"/>
//             </form>
//         </div>
//     )
// }

// export default EditForm