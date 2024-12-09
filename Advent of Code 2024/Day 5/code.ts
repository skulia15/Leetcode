import { readFileSync } from "fs";

const sortInvalid = (invalidList: string[], rules: Set<string>) => {
    const sorted: string[] = [];
    for (const page of invalidList) {
        let inserted = false;

        for (let i = 0; i < sorted.length; i++) {
            const existingPage = sorted[i];
            const rule = `${page}|${existingPage}`;

            // If there's a rule that the current page must come before the existing page
            if (rules.has(rule)) {
                sorted.splice(i, 0, page);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            sorted.push(page);
        }
    }
    return sorted;
};

const day5 = () => {
    // TODO: Can be improved by implementing A Directed Graph with topological sort

    // Read input file and split on empty line
    const input = readFileSync("input.txt").toString().split("\r\n\r\n");
    const rules = input[0].split("\r\n");
    const orders = input[1].split("\r\n");

    const ruleSet = new Set<string>();
    for (const rule of rules) {
        ruleSet.add(rule); // Example: "47|53"
    }

    let sum = 0;
    let validLists = [];
    let invalidLists = [];

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
            sum += parseInt(middlePage);
        } else {
            invalidLists.push(pages);
        }
    }

    console.log("part 1 answer:", sum);

    let sumPt2 = 0;

    for (const invalidList of invalidLists) {
        const sorted = sortInvalid(invalidList, ruleSet);
        const middlePage = sorted[Math.floor((sorted.length - 1) / 2)];
        sumPt2 += parseInt(middlePage);
    }
    console.log("part 2 answer:", sumPt2);
};

day5();
