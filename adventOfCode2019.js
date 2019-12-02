const fs = require('fs');

const input = () => fs.readFileSync('input', 'utf8').split('\n');
// Day 1 
const param = (() => {
    const DIVIDER = 3;
    const SUBTRACT = 2;
    
    return {
        DIVIDER,
        SUBTRACT
    }
})()

const singleModuleFuel = (singleVal) => (
    Math.floor(Number(singleVal) /  param.DIVIDER) - param.SUBTRACT
    );

const totalFuel = (input) => input.reduce((acc, oneValue) => (
    acc + singleModuleFuel(oneValue)
    ),0
)



console.log(totalFuel(input()));

