const arr = [1, 2, 30, 4, 5];
const arrLength = arr.length;

//1. for loop
// for (let i = 0; i < arrLength; i++) {
//     console.log(arr[i]);
// }

//2. for-of
// for (const item of arr) {
//     console.log(item)
// }

//3. foreach
//виконати певну функцію для кожного елементу масиву
arr.forEach(
    (el) => {
        console.log("Array element: " + el)
    }
)

