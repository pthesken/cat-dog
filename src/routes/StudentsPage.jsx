import Studentlist from "../components/Studentlist";

export default function StudentsPage({ students }) {
  return (
    <div>
      <h1>Students</h1>
      <Studentlist students={students} />
    </div>
  );
}
