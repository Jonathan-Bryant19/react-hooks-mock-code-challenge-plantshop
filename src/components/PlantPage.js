import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(setData)
  }, [])

  function handleOnSubmit(e) {
    e.preventDefault()
    const formData = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value
    }
    setData([...data, formData])
    console.log(data)
  }

  return (
    <main>
      <NewPlantForm handleOnSubmit={handleOnSubmit}/>
      <Search />
      <PlantList data={data} setData={setData}/>
    </main>
  );
}

export default PlantPage;
