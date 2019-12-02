const fs = require('fs');

const input = () => fs.readFileSync('input', 'utf8').split(',');
// Day 2

const param = (() => {
    const firstPos = 1;
    const secondPos = 2;
    const thirdPos = 3;
    const halt = 99;

    const gravityNum = 19690720;

    const steps = 4;
    
    return {
        firstPos,
        secondPos,
        thirdPos,
        steps,
        halt,
        gravityNum,
    }
})()

const opCodeOne = (intCode, initPos, ) => {
        intCode[intCode[initPos + param.thirdPos]] 
         = intCode[intCode[initPos + param.firstPos]] 
         + intCode[intCode[initPos + param.secondPos]]
    return intCode;
}

const opCodeTwo = (intCode, initPos) => {
        intCode[intCode[initPos + param.thirdPos]]
         = intCode[intCode[initPos + param.firstPos]] 
         * intCode[intCode[initPos + param.secondPos]]
    return intCode;
}

const calculateCode = (caseWhenOne, caseWhenTwo, integerCode) => {
    let initVal = 0;
    const intCode = integerCode.map(val => Number(val));

    while(initVal < intCode.length) {

        if (intCode[initVal] === 1) {
            caseWhenOne(intCode, initVal);
            initVal += param.steps;
        }

        if (intCode[initVal] === 2) {
            caseWhenTwo(intCode, initVal);
            initVal += param.steps;
        }

        if (intCode[initVal] === param.halt) break;
    }

     return intCode.join(',');
}


console.log(calculateCode(opCodeOne, opCodeTwo, input()));



// console.log(input);

