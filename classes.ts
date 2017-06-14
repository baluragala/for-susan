class Person {
  /* state */
  
  //access modifier - private, protected, public 
  private name: string;
  private age: number;
  private height: number;

  //accessors
  get Name(): string {
    return this.name;
  }

  set Name(value: string) {
    this.name = value;
  }

  get Age(): number {
    return this.age;
  }

  set Age(value: number) {
    if (value > 150) throw new Error("Age cannot be greater than 150");
    this.age = value;
  }

  get Height(): number {
    return this.height;
  }

  set Height(value: number) {
    this.height = value;
  }

  /* behavior */
  eat() {}

  sleep() {}

  work() {}

  walk() {}

  dance() {}
}

let john = new Person();
let mary = new Person();

john.Name = "John Doe";
john.Age = 330;
john.Height = 168;

mary.Name = "Mary James";
mary.Age = 26;
mary.Height = 160;

console.log(john);
console.log(mary);
