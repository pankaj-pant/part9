type Operation = 'multiply' | 'add' | 'divide'

type Result = number;
  
const calculator = (num1: number, num2: number, operator: Operation): Result => {
    let result;
    switch(operator) {
    case 'multiply':
        return result = num1 * num2;
    case 'add':
        return result = num1 + num2;
    case 'divide':
        if (num2 === 0) throw new Error("Cannot divide by 0")
        return result = num1 / num2;
    default:
        throw new Error('Operation is not multiply, divide or add!')
    }
}

const num1: number = Number(process.argv[2]);
const num2: number = Number(process.argv[3]);

console.log(calculator(num1, num2, 'multiply'));

