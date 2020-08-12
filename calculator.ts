export type Operation = 'multiply' | 'add' | 'divide';
type Result = number;
  
export const calculator = (num1: number, num2: number, operator: Operation): Result => {
    switch(operator) {
    case 'multiply':
        return num1 * num2;
    case 'add':
        return num1 + num2;
    case 'divide':
        if (num2 === 0) throw new Error("Cannot divide by 0");
        return num1 / num2;
    default:
        throw new Error('Operation is not multiply, divide or add!');
    }
};

/* const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
const op: Operation = process.argv[4] as Operation;

console.log(calculator(num1, num2, op)); */

