import Dog from "../Dog";

export default function DogList({ dogs }) {
  return (
    <>
      {dogs.map((dog) => {
        return <Dog key={dog.id} dog={dog} />;
      })}
    </>
  );
}
