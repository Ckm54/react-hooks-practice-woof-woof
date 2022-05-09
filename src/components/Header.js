import React from "react"
import Filter from "./Filter";
import DogBar from "./DogBar";

function Header({ dogs, displayInfo }) {
  return (
    <>
      <Filter />
      <DogBar dogs={dogs} displayInfo={displayInfo}/>
    </>
  )
}

export default Header