class Animal {
    constructor(name) {
        this.name = name;
    }

    jump() {
        console.log(`${this.name} jumps.`);

    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Dog class inherits from Animal
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the constructor of the parent class
    }

    speak() {
        console.log(`${this.name} barks. Woof-Woof!`);
    }
}

const dog = new Dog('Pes-Patron');
dog.speak();  // Pes-Patron barks. Woof-Woof!
dog.jump();   //jump() inherited from Animal
