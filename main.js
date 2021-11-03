// let message: string = "Hello Word"
// let heading = document.createElement("h1")
// heading.textContent = message
// document.body.appendChild(heading)
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, country, hobbies) {
        var _this = this;
        this.addName = function () { return _this.firstName.concat(" " + _this.lastName); };
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.hobbies = hobbies;
    }
    return Person;
}());
var person1 = new Person("Jamiu", "Afolabi", 24 + 1, "Nigeria", ['dancing', 'travelling', 'writing', 'seeing movies', 'playing games']);
var person2 = new Person("Sodiq", "Afolabi", 24 + 1, "Nigeria", ['dancing', 'travelling', 'writing', 'seeing movies', 'playing games']);
console.log(person1);
console.log(person1.addName());
