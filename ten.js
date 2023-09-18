let arrayOneInput = prompt("enter the values with coma b/w")
let arrayTwoInput = prompt("enter the values with coma b/w")

let arrOne = arrayOneInput.split(",")
let arrTwo = arrayTwoInput.split(",")

let temp = arrOne;
arrOne = arrTwo;
arrTwo = temp;

console.log("Array after swaping");

console.log(arrOne);
console.log(arrTwo);