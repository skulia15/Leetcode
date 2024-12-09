import { readFileSync } from "fs";

const day5 = () => {
    // Read input file and split on empty line
    const input = readFileSync("input.txt").toString().split("\r\n\r\n");
    const rules = input[0].split("\r\n");
    const orders = input[1];

    // Construct a map of rules
    const ruleMap = new Map<string, string[]>();
    for (const rule of rules) {
        const [key, value] = rule.split("|");
        let prevValues = ruleMap.get(key);
        ruleMap.set(key, prevValues ? [...prevValues, value] : [value]);
    }

    const lines = orders.split("\r\n");
    let validLists: string[] = [];

    // Loop through each line(order) of the orders
    for (let i = 0; i < lines.length; i++) {
        let validList = true;
        const numbers = lines[i].split(",");
        for (let j = 0; j < numbers.length - 1; j++) {
            const num = numbers[j];
            const nextNum = numbers[j + 1];

            // check each value
            const rulesForValue = ruleMap.get(num);
            if (rulesForValue?.includes(nextNum)) {
                // console.log("Rules for " + num + " includes " + nextNum);
            } else {
                console.log("rulesForValue", rulesForValue);
                validList = false;
                break;
            }
        }
        if (validList) {
            console.log("List IS valid");
            validLists.push(lines[i]);
        }
    }
    console.log(validLists);

    let sum = 0;
    for (let i = 0; i < validLists.length; i++) {
        const arr = validLists[i].split(",");
        var middle = arr[Math.round((arr.length - 1) / 2)];
        sum += parseInt(middle);
    }
    console.log("part 1 answer:", sum);
};

day5();
