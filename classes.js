var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "Name", {
        //accessors
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this.age;
        },
        set: function (value) {
            if (value > 150)
                throw new Error("Age cannot be greater than 150");
            this.age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Height", {
        get: function () {
            return this.height;
        },
        set: function (value) {
            this.height = value;
        },
        enumerable: true,
        configurable: true
    });
    /* behavior */
    Person.prototype.eat = function () { };
    Person.prototype.sleep = function () { };
    Person.prototype.work = function () { };
    Person.prototype.walk = function () { };
    Person.prototype.dance = function () { };
    return Person;
}());
var john = new Person();
var mary = new Person();
john.Name = "John Doe";
john.Age = 330;
john.Height = 168;
mary.Name = "Mary James";
mary.Age = 26;
mary.Height = 160;
console.log(john);
console.log(mary);
