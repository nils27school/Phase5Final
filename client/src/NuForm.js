import React from "react"

function NuForm({editRecipe, handleEditForm, selectedRecipe}) {

    function handleInputChange(e) {
        handleEditForm(e.target.name, e.target.value)
    }

    // function handleInput2(e) {
    //     const {name, value} = e.target
    //     handleEditForm(name, parseInt(value))
    // }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/recipes/${selectedRecipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedRecipe),
        })
        .then(r => r.json())
        .then(editRecipe)
    }

    if (!selectedRecipe) return null;

    const {name, description, ingredients} = selectedRecipe

    return(
        <div>
            <h3>Edit Recipe Details:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input name="name" placeholder="Recipe Name Here" value={name} type="text" onChange={handleInputChange}/>
                </div>
                <div>
                <label>Description:</label>
                <input name="description" placeholder="enter description here" value={description} type="text" onChange={handleInputChange}/>
                </div>
                <div>
                <label>Ingredients:</label>
                <input name="ingredients" placeholder="list ingredients here" type="text" value={ingredients} onChange={handleInputChange}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default NuForm