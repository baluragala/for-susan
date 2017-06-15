var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, age, height) {
        this.Name = name;
        this.Age = age;
        this.Height = height;
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            console.log("Getting Name");
            return this._name;
        },
        set: function (name) {
            console.log("Setting Name");
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.eat = function () { };
    Person.prototype.sleep = function () { };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, age, height, grade, collegeName) {
        var _this = _super.call(this, name, age, height) || this;
        _this.Grade = grade;
        _this.CollegeName = collegeName;
        return _this;
    }
    Object.defineProperty(Student.prototype, "Grade", {
        get: function () {
            return this._grade;
        },
        set: function (value) {
            this._grade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "CollegeName", {
        get: function () {
            return this._collegeName;
        },
        set: function (value) {
            this._collegeName = value;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.study = function () { };
    Student.prototype.print = function () { };
    return Student;
}(Person));
var mary = new Person('Mary', 23, 155);
var jim = new Student("Jim Jame", 22, 160, "B", "ABC");
console.log(mary);
console.log(jim);
