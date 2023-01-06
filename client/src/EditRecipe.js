import React from 'react'

function EditRecipe({ editForm, handleRecipeUpdate, handleChange }) {
    let {id, name, ingredients, description} = editForm

    function handleEditForm(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editForm),
        })
            .then(resp => resp.json())
            .then(updatedRecipe => {
                handleRecipeUpdate(updatedRecipe)})
    }

    return (
        <div>
            <h4>Edit Recipe</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="name" value={name} onChange={handleChange}/>
                <input type="text" name="ingredients" value={ingredients} onChange={handleChange}/>
                <input type="text" name="description" value={description} onChange={handleChange}/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default EditRecipe