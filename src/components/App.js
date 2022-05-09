import React, {useState, useEffect} from "react";
import Header from "./Header";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])
  const [dog, setDog] = useState(dogs[0])
  const [filter, setFilter] = useState(true)
  const [goodDogs, setGoodDogs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
    .then((res) => res.json())
    .then((data) => {
      setDogs(data)
      setDog(data[0])
    })
  }, []);

  function handleDisplayInfo(dog) {
    setDog(dog)
  }

  function toggleDogGoodness(dog){
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...dog,
        isGoodDog: !dog.isGoodDog
      })
    })
    .then((res) => res.json())
    .then((editedDog) => {
      setDog(editedDog)
      const newData = dogs.map((dog) => {
        if(dog.id === editedDog.id) {
          return editedDog
        } else{
          return dog
        }
      })
      setDogs(newData)
    })
  }

  function filterGoodDogs() {
    setFilter(filter => !filter)
    if (filter) {
      const goodDogs = [...dogs].filter((dog) => dog.isGoodDog)
      setGoodDogs(goodDogs)
    } else {
      setGoodDogs(dogs)
    }
  }
  return (
    <div className="App">
      <Header dogs={filter ? dogs : goodDogs} displayInfo={handleDisplayInfo} filterDogs={filterGoodDogs} isFilterOn={filter}/>
      {dog ? <DogInfo dog={dog} handleGoodness={toggleDogGoodness}/> : null}
    </div>
  );
}

export default App;
