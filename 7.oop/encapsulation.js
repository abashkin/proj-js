class Car {
    // Private properties
    #model;
    #year;

    constructor(model, year) {
        this.#model = model;
        this.#year = year;
    }

    // Public method
    start() {
        console.log(`${this.#model} (${this.#year}) is starting...`);
    }

    // Public method
    stop() {
        console.log(`${this.#model} has stopped.`);
    }

    // Getter for a private property
    get model() {
        return this.#model;
    }

    // Setter for a private property
    set year(value) {
        this.#year = value;
    }
}

const myCar = new Car('Daewoo Lanos', 2002);
console.log(myCar.model);
myCar.start();
myCar.stop();