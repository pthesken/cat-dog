export default function Cat({ cat }) {
  return (
    <div key={cat.id} className="cat-card">
      <h2>{cat.name}</h2>
      <p>Age: {cat.age}</p>
      <p>Color: {cat.color}</p>
    </div>
  );
}
