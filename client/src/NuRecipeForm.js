import React, {useState} from "react"
import NuEditForm from "./NuEditForm"

function NuRecipeForm({recipes, setRecipes, editRecipe, handleEditForm, selectedRecipe}){
    const [formData, setFormData] = useState('')

    function handleInput(e) {
        const {name, value} = e.target
        setFormData({
            ...formData, [name]: value,
        })
    }
    function handleInput2(e) {
        const {name, value} = e.target
        setFormData({
            ...formData, [name]: parseInt(value),
        })
    }

    function addRecipe(e) {
        e.preventDefault()
        const newRecipe = {
            name: formData.name,
            recipe_id: formData.recipe_id,
            user_id: formData.user_id,
            description: formData.description,
            ingredients: formData.ingredients
        }
        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
        .then(r => r.json())
        .then(data => updateRecipes(data))
    }

    function updateRecipes(newRecipe) {
        setRecipes([...recipes, newRecipe])
    }
    return(
        <div>
            <h2 className="page-title">Add or Edit Recipes</h2>
            <div>
                <h3>Addition Form:</h3>
                <form onSubmit={addRecipe} className="form">
                    <div>
                        <label >Name:</label>
                        <input name="name" placeholder="Recipe Name Here" type="text" onChange={handleInput}className="form-box"/>
                    </div>
                    <div>
                    <label>Description:</label>
                    <input name="description" className="form-box" placeholder="enter description here" type="text" onChange={handleInput}/>
                    </div>
                    <div>
                    <label>Ingredients:</label>
                    <input name="ingredients" className="form-box" placeholder="list ingredients here" type="text" onChange={handleInput}/>
                    </div>
                    <input type="submit"/>
            </form>
            </div>
            <div>
            <NuEditForm editRecipe={editRecipe} handleEditForm={handleEditForm} selectedRecipe={selectedRecipe}/>
            </div>
        </div>
    )
}

export default NuRecipeForm