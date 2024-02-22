import Cat from "./Cat";

export default function CatList({ cats }) {
  return (
    <>
      {cats.map((cat) => {
        return <Cat key={cat.id} cat={cat} />;
      })}
    </>
  );
}
