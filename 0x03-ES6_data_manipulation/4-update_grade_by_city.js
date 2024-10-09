export default function updateStudentGradeByCity(students, city, newGrade) {
  const defaultGrade = { grade: 'N/A' };
  if (students instanceof Array) {
    const student = students.filter((student) => student.location === city)
      .map((obj) => ({
        id: obj.id,
        firstName: obj.firstName,
        location: obj.location,
        grade: (newGrade.filter((grad) => grad.studentId === obj.id).pop() || defaultGrade).grade,
      }));
    return student;
  }
  return [];
}
