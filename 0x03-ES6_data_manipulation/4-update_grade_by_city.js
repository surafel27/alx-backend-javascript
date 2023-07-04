export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const studentByLoc = getListStudents.filter((student) => (student.location === city));
  const updatedStudents = studentByLoc.map((student) => {
    const matchGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (matchGrade) {
      return { ...student, grade: matchGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudents;
}
