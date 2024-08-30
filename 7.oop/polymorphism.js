class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

function makeAnimalSpeak(animal) {
    animal.speak();
}

const dog = new Dog('Patron');
const cat = new Cat('Vasyl');

makeAnimalSpeak(dog); // Output: Patron barks.
makeAnimalSpeak(cat); // Output: Vasyl meows.
