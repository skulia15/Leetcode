import * as fs from "fs";

const isSafe = (arr: number[]): boolean => {
    const isAscending = arr.every(
        (value, index) =>
            index == 0 ||
            (arr[index - 1] < value && Math.abs(arr[index - 1] - value) <= 3)
    );
    const isDescending = arr.every(
        (value, index) =>
            index == 0 ||
            (arr[index - 1] > value && Math.abs(arr[index - 1] - value) <= 3)
    );
    return isAscending || isDescending;
};

const day2pt1 = () => {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines = input.split("\n");

    let safeCount = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const levels: number[] = line.split(" ").map(Number);
        if (isSafe(levels)) {
            safeCount++;
        }
    }
    console.log(safeCount);
};

const problemDampener = (arr: number[]): boolean => {
    // can be improved with early exit and without creating new arrays every loop, when I have time (never)
    for (let i = 0; i < arr.length; i++) {
        var cloneArray = arr.slice();
        cloneArray.splice(i, 1);
        console.log("Spliced", cloneArray);

        if (isSafe(cloneArray)) return true;
    }
    return false;
};

const day2pt2 = () => {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines = input.split("\n");

    let safeCount = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const levels: number[] = line.split(" ").map(Number);
        if (isSafe(levels) || problemDampener(levels)) {
            safeCount++;
        }
    }
    console.log(safeCount);
};

day2pt2();
