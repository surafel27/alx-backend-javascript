function getListStudentIds(getListStudents) {
  if ( !(getListStudents instanceof Array))
    return [];
  const studentList =  getListStudents.map(function(value, index) => {
    return index;
  )};
  return studentList;
}
