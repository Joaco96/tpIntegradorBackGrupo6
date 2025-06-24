const students = [
  {
    id: "23232442",
    name: "santi",
  },
  {
    id: "23232443",
    name: "joaco",
  },
];

export default class Student {
  static findAll() {
    return students ?? [];
  }

  static findById(id) {
    return students.find((s) => s.id.toString() === id);
  }

  static create(student) {
    if (student.id && student.name) {
      const newStudent = { id: student.id, name: student.name };
      students.push(newStudent);
      return true;
    }
    return false;
  }
}
