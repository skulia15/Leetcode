"use strict";
// Run using tsc FizzBuzz.ts && node FizzBuzz.js
const count = 1000;
const FizzBuzz = () => {
    let divisorMap = {
        3: "Fizz",
        5: "Buzz",
    };
    let res = [];
    for (var i = 1; i <= 100; i++) {
        let divres = "";
        for (let divisorStr in divisorMap) {
            const divisor = Number(divisorStr);
            if (i % divisor === 0) {
                divres += divisorMap[divisor];
            }
        }
        divres !== "" ? res.push(divres) : res.push(i);
    }
    return res;
};
const res = FizzBuzz();
console.log(res);
