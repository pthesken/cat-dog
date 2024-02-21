import { useState } from "react";
import { students, cats, dogs } from "./data";
import "./App.css";

function App() {
  return (
    <div>
      <h1> Students </h1>
      {students.map((student) => {
        return <h2 key={student.id}>{student.name}</h2>;
      })}

      <h1>Cats</h1>
      {cats.map((cat) => {
        return (
          <div key={cat.id} className="cat-card">
            <h2>{cat.name}</h2>
            <p>Age: {cat.age}</p>
            <p>Color: {cat.color}</p>
          </div>
        );
      })}

      <h1>Dogs</h1>
      {dogs.map((dog) => {
        return (
          <div key={dog.id} className="dog-card">
            <h2>{dog.name}</h2>
            <p>Age: {dog.age}</p>
            <p>Breed: {dog.breed}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
