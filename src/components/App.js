import React, {useState, useEffect} from "react";
import Header from "./Header";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])
  const [dog, setDog] = useState(dogs[0])

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
  return (
    <div className="App">
      <Header dogs={dogs} displayInfo={handleDisplayInfo}/>
      {dog ? <DogInfo dog={dog}/> : null}
    </div>
  );
}

export default App;
