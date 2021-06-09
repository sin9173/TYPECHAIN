const name = "Nico", age=24, gender="male";

interface Human {
    name:string;
    age:number;
    gender:string;
}

const person = {
    name : "nico",
    gender : "male",
    age : 22
}



// const sayHi = (name:string, age:number, gender:string): string => {
//     return `Hello ${name}, you are ${age}, you are ${gender}`;
// }

const sayHi = (person: Human) : string => {
    return `Hello ${person.name}, you are ${age}, you are ${gender}`;
}


//sayHi(name, age);
console.log(sayHi(person));

export {};