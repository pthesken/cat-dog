import { useState } from "react";
import { students, cats, dogs } from "./data";
import "./App.css";
import Student from "./Student";
import Studentlist from "./Studentlist";
import Cat from "./Cat";
import Dog from "./Dog";
import CatList from "./CatList";
import DogList from "./DogList";

function App() {
  return (
    <div>
      <h1> Students </h1>
      <Studentlist students={students} />

      <h1>Cats</h1>
      <CatList cats={cats} />

      <h1>Dogs</h1>
      <DogList dogs={dogs} />
    </div>
  );
}

export default App;
