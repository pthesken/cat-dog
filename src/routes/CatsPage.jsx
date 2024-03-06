import React from "react";
import CatList from "../components/CatList";

export default function CatsPage({ cats }) {
  return (
    <div>
      <h1>Cats</h1>
      <CatList cats={cats} />
    </div>
  );
}
