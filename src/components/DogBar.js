import React from "react";

function DogBar({ dogs, displayInfo }) {
  return (
    <div id="dog-bar">
      {dogs.map((dog) => <span key={dog.id} onClick={() => displayInfo(dog)}>{dog.name}</span>)}
    </div>
  )
}

export default DogBar