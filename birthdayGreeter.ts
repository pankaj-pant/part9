
const birthdayGreeter = (person: string, age: number): string => {
    return `Happy Birthday ${person}. Congrats on turning ${age}!`;
}

const person:string = String(process.argv[2]);
const age: number = Number(process.argv[3]);

console.log(birthdayGreeter(person, age))