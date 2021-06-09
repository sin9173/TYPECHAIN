"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Nico", age = 24, gender = "male";
const person = {
    name: "nico",
    gender: "male",
    age: 22
};
// const sayHi = (name:string, age:number, gender:string): string => {
//     return `Hello ${name}, you are ${age}, you are ${gender}`;
// }
const sayHi = (person) => {
    return `Hello ${name}, you are ${age}, you are ${gender}`;
};
//sayHi(name, age);
console.log(sayHi(person));
//# sourceMappingURL=index.js.map