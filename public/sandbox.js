"use strict";
const character = 'Walter';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
let age = 30;
let isBlackBelt = false;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(5.8));
let charac;
let numbos;
let address = [];
let mixed = [];
address.push("Walter");
console.log(address);
mixed.push(false, 'Walter', 27);
console.log(mixed);
let mega;
mega = 'retwaL ';
let greet;
greet = () => {
    console.log("Helloooo!!!!");
};
let add;
add = (a, b) => {
    console.log(a + b);
};
add(500, 100);
const minus = (a, b) => {
    return a + b;
};
let result = minus(34, 50);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetFirst = (user) => {
    console.log(`${user.name} says hello`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let loginDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
loginDetails = (ninja) => {
    console.log(``);
};
