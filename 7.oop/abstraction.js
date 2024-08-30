class CoffeeMachine {
    #waterAmount = 0;

    constructor(power) {
        this.power = power;
        console.log(`Created a coffee machine with power: ${power}`);
    }

    setWaterAmount(amount) {
        this.#waterAmount = amount;
    }

    getWaterAmount() {
        return this.#waterAmount;
    }

    #boilWater() {
        console.log("Boiling water...");
    }

    #grindCoffee() {
        console.log("Grinding coffee beans...");
    }

    makeCoffee() {
        this.#boilWater();
        this.#grindCoffee();
        console.log("Coffee is ready!");
    }
}

const coffeeMachine = new CoffeeMachine(1000);
coffeeMachine.setWaterAmount(200);
coffeeMachine.makeCoffee();  // Output: Boiling water... Coffee is ready!
// coffeeMachine.#boilWater();  // Error: Private method
