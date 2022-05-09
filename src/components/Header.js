import React from "react"
import Filter from "./Filter";
import DogBar from "./DogBar";

function Header({ dogs }) {
  return (
    <>
      <Filter />
      <DogBar dogs={dogs}/>
    </>
  )
}

export default Header