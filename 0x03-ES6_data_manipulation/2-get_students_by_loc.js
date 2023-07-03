export default function getStudentsByLocation(getListStudents, city) {
  const student = getListStudents.filter((student) => (student.location === city));
  return student;
}
