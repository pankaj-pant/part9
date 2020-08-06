interface ResultObject {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number,
}


const calculateExercises = (hours: number[], target: number): ResultObject => {

    const periodLength = hours.length;
    const trainingDays = hours.filter(a => a > 0);
    const sum = hours.reduce((a, b) => a + b, 0)
    const average = (sum / periodLength)
    const success = average >= target ? true : false;
    let rating;
    let ratingDescription;
    const calcTraining = () => {
        if (average >= target){
            rating = 3;
            ratingDescription = "Well done!"
        } else if (target - average < 0.3){
            rating = 2;
            ratingDescription = "not too bad but could be better"
        } else {
            rating = 1;
            ratingDescription = "You need to put more effort in!"
        }
    }
    calcTraining();



    return {
        periodLength: periodLength,
        trainingDays: trainingDays.length,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    }
}

console.log(calculateExercises([1,2,3,4,5,6,7], 4))