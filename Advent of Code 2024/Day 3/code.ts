import * as fs from "fs";

const day3pt1 = () => {
    const input = fs.readFileSync("input.txt", "utf8");
    // const regex: RegExp = /.+\*.+/;
    const regex = /mul\(\d{1,3},\d{1,3}\)/g;

    let matches = input.match(regex);
    let sum = 0;
    matches?.map((mul) => {
        const res = mul.split(/\(|,/);
        sum += parseInt(res[1]) * parseInt(res[2]);
    });
    console.log(sum);
};

const day3pt2 = () => {
    const input = fs.readFileSync("input.txt", "utf8");
    // const regex: RegExp = /.+\*.+/;
    const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

    let matches = input.match(regex);
    let sum = 0;
    let doOperation = true;
    matches?.map((mul) => {
        const res = mul.split(/\(|,/);
        let operation = res[0];
        if (operation === "do") {
            doOperation = true;
        } else if (operation === "don't") {
            doOperation = false;
        } else if (operation === "mul" && doOperation) {
            sum += parseInt(res[1]) * parseInt(res[2]);
        }
    });
    console.log(sum);
};

day3pt1();
day3pt2();
