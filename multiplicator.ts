const multiplicator = (a: number, b: number, text: string): string => {
    const product = a * b;
    return `${text} ${product}`;
    
};

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

console.log(multiplicator(a, b, `Multiplied numbers ${a} and ${b}, the result is:`));