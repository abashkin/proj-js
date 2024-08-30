// Define a Person class
class Person {
    //constructor - a function to create an instance of a class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

// Creating an instance of the Person class
const illia = new Person('Illia', 35);

// Accessing properties and calling methods
console.log(illia.name);   // Output: Iliia
illia.sayHi();             // Output: Hi, my name is Iliia.