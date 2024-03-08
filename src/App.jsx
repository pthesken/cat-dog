import { useState } from "react";
import { NavLink, Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { students, cats, dogs } from "./data";
import "./App.css";
import StudentsPage from "./routes/StudentsPage";
import DogsPage from "./routes/DogsPage";
import "normalize.css";
import CatsPage from "./routes/CatsPage";

function App() {
  const navigate = useNavigate();
  const pageRoutes = ["/", "/cats", "/dogs"];
  return (
    <>
      <nav className="navigation">
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Students</NavLink>
          </li>
          <li>
            <NavLink to="/cats">Cats Page</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Dog Page</NavLink>
          </li>
        </ul>
        <button
          onClick={() => {
            const randomPageIndex = Math.floor(
              Math.random() * pageRoutes.length
            );
            navigate(pageRoutes[randomPageIndex]);
          }}
        >
          Random Page
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<StudentsPage students={students} />} />

        <Route path="/cats" element={<CatsPage cats={cats} />} />

        <Route path="/dogs" element={<DogsPage dogs={dogs} />} />
      </Routes>
    </>
  );
}

export default App;
