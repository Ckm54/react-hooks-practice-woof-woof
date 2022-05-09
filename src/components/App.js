import React, {useState, useEffect} from "react";
import Header from "./Header";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])
  const [dog, setDog] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
    .then((res) => res.json())
    .then((data) => setDogs(data))
  }, []);

  function handleDisplayInfo(dog) {
    setDog(dog)
  }
  return (
    <div className="App">
      <Header dogs={dogs} displayInfo={handleDisplayInfo}/>
      <DogInfo dog={dog}/>
    </div>
  );
}

export default App;
