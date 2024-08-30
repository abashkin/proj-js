const fruits = ['apple', 'banana', 'orange', 'orange2'];
console.log(fruits.indexOf('banana')); // 1

const hasBanana = fruits.includes('banana');
console.log(hasBanana);

const oFruit = fruits.find((fruit) => fruit.startsWith('o'))
console.log(oFruit);

const oFruits = fruits.filter(fruit => fruit.startsWith('o'));
console.log(oFruits);