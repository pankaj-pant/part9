import express from 'express'
import {calculateBmi} from './bmiCalculator'
const app = express()
const port = 3000

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
    let height = req.query.height;
    let weight = req.query.weight;

    if (height === "" || weight === "" || isNaN(Number(height)) || isNaN(Number(weight))){
        res.send({
            error: "malformatted parameters"
          })
    } else {
        res.send({
            weight: Number(weight),
            height: Number(height),
            bmi: calculateBmi(Number(height), Number(weight))
        })
    }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})