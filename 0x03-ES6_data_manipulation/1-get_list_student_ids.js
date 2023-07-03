export default function getListStudentIds(getListStudents) {
  if (!(getListStudents instanceof Array)) return [];
  const studentList = getListStudents.map((student) => student.id);
  return studentList;
}
