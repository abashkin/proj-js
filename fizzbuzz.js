function fizzBuzz(maxNumber) {
    for (let i = 1; i <= maxNumber; i = i + 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FooBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Foo");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(15);
fizzBuzz(15);
fizzBuzz(15);