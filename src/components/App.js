import React, {useState, useEffect} from "react";
import Header from "./Header";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
    .then((res) => res.json())
    .then((data) => setDogs(data))
  }, [])
  return (
    <div className="App">
      <Header dogs={dogs}/>
      <DogInfo />
    </div>
  );
}

export default App;
