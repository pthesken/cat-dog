import DogList from "../components/DogList";

export default function DogsPage({ dogs }) {
  return (
    <div>
      <h1>Dogs</h1>
      <DogList dogs={dogs} />
    </div>
  );
}
