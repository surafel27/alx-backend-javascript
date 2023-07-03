export default function getListStudentIds(getListStudents) {
  if (!(getListStudents instanceof Array)) return [];
  const studentList = getListStudents.map((value, index) => index);
  return studentList;
}
