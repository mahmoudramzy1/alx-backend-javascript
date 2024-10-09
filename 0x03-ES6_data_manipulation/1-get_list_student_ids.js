export default function getListStudentIds(persons) {
  if (!Array.isArray(persons)) {
    return [];
  }

  return persons.map((item) => item.id);
}
