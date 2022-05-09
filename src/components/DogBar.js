import React from "react";

function DogBar({ dogs }) {
  return (
    <div id="dog-bar">
      {dogs.map((dog) => <span>{dog.name}</span>)}
    </div>
  )
}

export default DogBar