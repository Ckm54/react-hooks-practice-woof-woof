import React from "react"
import Filter from "./Filter";
import DogBar from "./DogBar";

function Header({ dogs, displayInfo, filterDogs, isFilterOn }) {
  return (
    <>
      <Filter filterDogs={filterDogs} isFilterOn={isFilterOn}/>
      <DogBar dogs={dogs} displayInfo={displayInfo} />
    </>
  )
}

export default Header