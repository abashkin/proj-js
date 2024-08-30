//constructor is a special function that creates an object

function Person(name, age, city) {
    return {
        name,
        age,
        city
    }
}

const illia = new Person("Illia", 35, "Kyiv");
const illiaFromLondon = new Person("Illia", 35, "London");


console.log(`Name: ${illiaFromLondon.name}, Age: ${illiaFromLondon.age} City: ${illiaFromLondon.city}`)