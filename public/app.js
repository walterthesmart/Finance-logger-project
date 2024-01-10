import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payments.js';
const me = {
    name: 'Walter',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spendd(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
greetPerson(me);
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
const form = document.querySelector('.new-item-form');
// inputs
const typee = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (typee.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, typee.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
};
// ENUMS
