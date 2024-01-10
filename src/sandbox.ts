const character = 'Walter';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});


let age = 30;
let isBlackBelt = false;

const circ =  (diameter: number) => {
    return diameter* Math.PI;
}

console.log(circ(5.8));

let charac: string;
let numbos: number;
let address: string[] = [];

let mixed: (string|number|boolean)[] = [];
address.push("Walter");
console.log(address);
mixed.push(false, 'Walter', 27);
console.log(mixed);

let mega: any;

mega = 'retwaL '


let greet: Function;


greet = () => {
    console.log("Helloooo!!!!");
}


let add: Function;

add = (a: number, b: number) => {
    console.log(a+b);
}

add(500, 100); 

const minus = (a: number, b:number): number => {
    return a+b;
}

let result = minus(34, 50);


const logDetails = (uid: string| number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetFirst = (user: {name: string, uid: string|number}) => {
    console.log(`${user.name} says hello`);
}

let calc: (a: number, b: number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === "add"){
       return numOne+numTwo;
    }
    else{
        return numOne-numTwo;
    }
}

type person = {name: string, age: number};
let loginDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

loginDetails = (ninja: person) => {
    console.log(``)
}


