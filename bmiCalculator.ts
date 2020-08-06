const calculateBmi = (height: number, weight: number) => {
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
    console.log(bmi)
}

calculateBmi(180, 94)