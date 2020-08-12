
const birthdayGreeter = (person: string, age: number): string => {
    return `Happy Birthday ${person}. Congrats on turning ${age}!`;
};

const person = String(process.argv[2]);
const age = Number(process.argv[3]);

console.log(birthdayGreeter(person, age));