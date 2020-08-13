interface ResultObject {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number,
}

interface ErrorObject {
    error: string
}

export const calculateExercises = (target: number, hours: number[]): ResultObject | ErrorObject => {

     if (hours.every(h => !isNaN(Number(h))) && !isNaN(Number(target))) {
        const periodLength = hours.length;
        const trainingDays = hours.filter(a => a > 0);
        const sum = hours.reduce((a, b) => a + b, 0);
        const average = (sum / periodLength);
        const success = average >= target ? true : false;
        let rating = 0;
        let ratingDescription = "";
        const calcTraining = () => {
            if (average >= target){
                rating = 3;
                ratingDescription = "Well done!";
            } else if (target - average < 0.3){
                rating = 2;
                ratingDescription = "not too bad but could be better";
            } else {
                rating = 1;
                ratingDescription = "You need to put more effort in!";
            }
        };
        calcTraining();
    
        return {
            periodLength: periodLength,
            trainingDays: trainingDays.length,
            success: success,
            rating: rating,
            ratingDescription: ratingDescription,
            target: Number(target),
            average: average
        };
    } else {
        //throw new Error('Provided values were not numbers!');
        return {
            error: "malformatted parameters"
        };
    }

};

/* const target = Number(process.argv[2]);
const arr: Array<number> = process.argv.slice(3).map(Number);


try {
    console.log(calculateExercises(target, arr));
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log('Error, something bad happened, message: ', e.message);
  } */