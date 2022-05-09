import React from "react";

function DogBar({ dogs }) {
  return (
    <div id="dog-bar">
      {dogs.map((dog) => <span key={dog.id}>{dog.name}</span>)}
    </div>
  )
}

export default DogBar