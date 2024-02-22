export default function Dog({ dog }) {
  return (
    <div key={dog.id} className="dog-card">
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
    </div>
  );
}
