import express from 'express';
import {calculateBmi} from './bmiCalculator';
import {calculator} from './calculator';
import type {Operation} from './calculator';
const app = express();
const port = 3000;

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = req.query.height;
    const weight = req.query.weight;

    // eslint-disable-next-line no-irregular-whitespace
    if (height === "" || weight === "" || isNaN(Number(height)) || isNaN(Number(weight)) ){
        res.send({
            error: "malformatted parameters"
          });
    } else {
        res.send({
            weight: Number(weight),
            height: Number(height),
            bmi: calculateBmi(Number(height), Number(weight))
        });
    }
});

app.get('/calculate', (req, res) => {
    const {num1, num2} = req.query;
    const op: Operation = req.query.op as Operation;
    const result = calculator(Number(num1), Number(num2), op);
    res.send({result: result});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});