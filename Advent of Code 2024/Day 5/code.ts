import { readFileSync } from "fs";

const day5 = () => {
    // TODO: Can be improved by implementing A Directed Graph with topological sort

    // Read input file and split on empty line
    const input = readFileSync("input.txt").toString().split("\r\n\r\n");
    const rules = input[0].split("\r\n");
    const orders = input[1].split("\r\n");

    const ruleSet = new Set();
    for (const rule of rules) {
        ruleSet.add(rule); // Example: "47|53"
    }

    let sum = 0;
    let validLists = [];

    // Loop through each line(order) of the orders
    for (const line of orders) {
        const pages = line.split(",");

        let validList = true;
        for (let i = 0; i < pages.length; i++) {
            for (let j = i + 1; j < pages.length; j++) {
                const pairRule = `${pages[i]}|${pages[j]}`;

                // If the rule exists, it's valid; otherwise, it's invalid
                if (!ruleSet.has(pairRule)) {
                    validList = false;
                    break;
                }
            }
            if (!validList) break;
        }
        if (validList) {
            validLists.push(pages);
            const middlePage = pages[Math.floor((pages.length - 1) / 2)];
            sum += parseInt(middlePage, 10);
        }
    }

    console.log(validLists);

    console.log("part 1 answer:", sum);
};

day5();
