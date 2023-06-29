export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._verifyName(name, 'Name');
    this._length = this._verifyLength(length, 'Length');
    this._students = this._verifyStudents(students, 'Students');
  }

  _verifyName(value, attribute) {
    if (typeof value !== 'string') {
      throw TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  _verifyLength(value, attribute) {
    if (typeof value !== 'number') {
      throw TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  _verifyStudents(value, attribute) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw TypeError(`${attribute} must be an array of string`);
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._verifyName(value, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._verifyLength(value, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._verifyStudents(value, 'Students');
  }
}
