import { ListTemplate } from './classes/ListTemplate.js';
import {Invoice} from './classes/invoice.js'
import { Payment } from './classes/payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


// interface
interface IsPerson
{
    name: string;
    age: number;
    speak(a: string): void;
    spendd(a: number): number;
}

const me: IsPerson = {
    name: 'Walter',
    age: 30,
    speak(text: string): void{
        console.log(text);
    },
    spendd(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('Hello ', person.name)
}

greetPerson(me)



// let docOne: HasFormatter;
// let docTwo: HasFormatter;


// const invOne = new Invoice('Walter', 'School fees', 4000);
// const invTwo = new Invoice('Daniella', 'SOP', 200);


// console.log(invOne, invTwo);

// let invoices: Invoice[] = []
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.format());
// });



const form = document.querySelector('.new-item-form') as HTMLFormElement;


// inputs
const typee = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (typee.value === 'invoice')
    {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, typee.value, 'end');
});

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});

console.log(docOne.age)


interface Resource<T>
{
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
}
// ENUMS

