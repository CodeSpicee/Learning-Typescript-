// let message: string = "Hello Word"
// let heading = document.createElement("h1")
// heading.textContent = message
// document.body.appendChild(heading)


// function getArray<T>(items: T[]): T[] {
// return new Array().concat(items)
// }
 
// let numArray  = getArray<number>([1,2,34+1])
// let stringArray = getArray<string>(['name', 'bolu', '5'])
// console.log(stringArray)
// console.log(numArray)

interface PersonInterface {
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    hobbies: string[]
    addName(): string
}

class Person implements PersonInterface {
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    hobbies: string[]
    
    constructor(firstName: string, lastName: string, age: number, country: string, hobbies: string[]) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.hobbies = hobbies
    }
    addName = () => this.firstName.concat(" " + this.lastName)
}

let person1 = new Person("Jamiu", "Afolabi", 24+1, "Nigeria", ['dancing', 'travelling', 'writing', 'seeing movies', 'playing games'])
let person2 = new Person("Sodiq", "Afolabi", 24+1, "Nigeria", ['dancing', 'travelling', 'writing', 'seeing movies', 'playing games'])
console.log(person1)
console.log(person1.addName())