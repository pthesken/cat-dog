import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { students, cats, dogs } from "./data";
import "./App.css";
import StudentsPage from "./routes/StudentsPage";
import DogsPage from "./routes/DogsPage";
import "normalize.css";
import CatsPage from "./routes/CatsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentsPage students={students} />} />

        <Route path="/cats" element={<CatsPage cats={cats} />} />

        <Route path="/dogs" element={<DogsPage dogs={dogs} />} />
      </Routes>
    </div>
  );
}

export default App;
