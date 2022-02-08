import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {data} ) {
  
  
  const plantCard = data.map((plantObj) => {
    return <PlantCard image={plantObj.image} name={plantObj.name} price={plantObj.price}/>
  }) 
  
  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
