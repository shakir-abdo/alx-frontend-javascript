export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._students = students;
    this._length = length;
  }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }

  get length() {
    return this._length;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }
}
