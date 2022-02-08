import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(setData)
  }, [])

  function addNewPlant(plant) {
    setData([plant, ...data])
  }
 
  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  const searchedPlants = data.filter(plantObj => {
    const lowerPlantName = plantObj.name.toLowerCase()
    const lowerSearchName = searchValue.toLocaleLowerCase()
    return lowerPlantName.includes(lowerSearchName)
  })

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search handleChange={handleChange}/>
      <PlantList data={searchedPlants} setData={setData}/>
    </main>
  );
}

export default PlantPage;
