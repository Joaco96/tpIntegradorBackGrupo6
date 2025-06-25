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

  static update(id, student) {
    if (student.name) {
      students.forEach((s) => {
        if (s.id === id) {
          s.name = student.name;
        }
      });
      return true;
    }
    return false;
  }

  static delete(id) {
    let toDeleteIndex = -1; 
    students.forEach((s, index) => {
      if(s.id === id) toDeleteIndex = index;
    });

    if (toDeleteIndex === -1) return false;

    students.splice(toDeleteIndex, 1);
    return true;
  }
}
