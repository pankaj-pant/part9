 type Result = string;

 export const calculateBmi = (height: number, weight: number): Result => {
    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
        const result = ((weight / (height * height)) * 10000);
        switch (true) {
            case (result < 25):
                return "Normal (healthy weight)";
            case (result >= 30):
                return "obese";
            default:
                return "overweight";
        }
    } else {
        throw new Error('Provided values were not numbersss!');
    }
};

/* const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

try {
    console.log(calculateBmi(height, weight));
} catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log('Error, something bad happened, message: ', e.message);
} */