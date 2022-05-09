import React, {useState, useEffect} from "react";
import Header from "./Header";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
    
  })
  return (
    <div className="App">
      <Header />
      <DogInfo />
    </div>
  );
}

export default App;
