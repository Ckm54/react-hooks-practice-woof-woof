import React from "react";

function Filter({filterDogs, isFilterOn}) {
  return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={filterDogs}>Filter good dogs: {isFilterOn ? "OFF" : "ON"}</button>
      </div>
  )
}

export default Filter