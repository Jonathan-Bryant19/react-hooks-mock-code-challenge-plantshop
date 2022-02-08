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

  

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList data={data}/>
    </main>
  );
}

export default PlantPage;
