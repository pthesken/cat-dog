import Student from "./Student";

export default function Studentlist({ students }) {
  return (
    <>
      {students.map((student) => {
        return <Student key={student.id} student={student} />;
      })}
    </>
  );
}
