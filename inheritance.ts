class Person {
//   protected _name: string;
//   protected _age: number;
//   protected _height: number;

  constructor(protected _name: string, protected _age: number, protected _height: number) {
    this.Name = _name;
    this.Age = _age;
    this.Height = _height;
  }

  set Name(name: string) {
    console.log("Setting Name");
    this._name = name;
  }

  get Name(): string {
    console.log("Getting Name");
    return this._name;
  }

  set Age(age: number) {
    this._age = age;
  }

  set Height(height: number) {
    this._height = height;
  }

  get Age(): number {
    return this._age;
  }

  get Height(): number {
    return this._height;
  }

  eat() {}

  sleep() {}
}

class Student extends Person {
  private _grade: string;
  private _collegeName: string;

  constructor(
    name: string,
    age: number,
    height: number,
    grade: string,
    collegeName: string
  ) {
    super(name,age,height);
    this.Grade = grade;
    this.CollegeName = collegeName;
  }

  set Grade(value: string) {
    this._grade = value;
  }

  set CollegeName(value: string) {
    this._collegeName = value;
  }

  get Grade(): string {
    return this._grade;
  }

  get CollegeName(): string {
    return this._collegeName;
  }

  study() {}

  print() {}
}

let mary = new Person('Mary',23,155);
let jim = new Student("Jim Jame", 22, 160, "B", "ABC");
console.log(mary);
console.log(jim);
