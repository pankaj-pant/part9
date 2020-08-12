 export const calculateBmi = (height: number, weight: number) => {
    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
        const result = ((weight / (height * height)) * 10000)
        let bmi;
        switch (true) {
            case (result < 25):
                bmi = "Normal (healthy weight)";
                break;
            case (result >= 30):
                bmi = "obese";
                break;
            default:
                bmi = "overweight";
                break;
        }
        return bmi;
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])

try {
    console.log(calculateBmi(height, weight))
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
}