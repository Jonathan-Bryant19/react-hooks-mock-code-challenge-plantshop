import React, { useState } from "react";

function NewPlantForm({addNewPlant}) {
  const [formName, setFormName] = useState("")
  const [formImage, setFormImage] = useState("")
  const [formPrice, setFormPrice] = useState("")

  function createPlant(e) {
    e.preventDefault()
    const newPlant = {
      name: formName,
      image: formImage,
      price: formPrice
    }
    addNewPlant(newPlant)
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={createPlant}>
        <input onChange={(e) => setFormName(e.target.value)}type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setFormImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setFormPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
