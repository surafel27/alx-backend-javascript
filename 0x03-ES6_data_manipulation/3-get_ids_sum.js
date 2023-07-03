export default function getStudentIdsSum(getListStudents) {
  if (!(getListStudents instanceof Array)) return 0;
  const idSum = getListStudents.reduce((accumulator, student) => accumulator + student.id, 0);
  return idSum;
}
