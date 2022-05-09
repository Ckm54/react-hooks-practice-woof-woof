import React from "react";

function DogInfo({ dog }) {
  console.log(dog)
  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <img src={dog.image} alt={dog.name} />
          <h2>{dog.name}</h2>
          <button>{dog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
      </div>
  )
}

export default DogInfo