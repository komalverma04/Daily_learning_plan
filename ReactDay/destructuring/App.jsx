import React from "react";
import animals, { useAnimals } from "./data";
function App() {
  const [cat, dog] = animals;
  const { name, sound, speedStats } = cat;
  const { topSpeed, zeroToSixty } = speedStats;
  const [animalName, makeSound] = useAnimals(cat);
  console.log(animalName);
  makeSound();
  return <h1>hello</h1>;
}
export default App;
