import * as fs from "fs";

const directions: number[][] = [
    [0, 1], // Horizontal: left-to-right
    [0, -1], // Horizontal: right-to-left
    [1, 0], // Vertical: top-to-bottom
    [-1, 0], // Vertical: bottom-to-top
    [1, 1], // Diagonal: top-left to bottom-right
    [-1, -1], // Diagonal: bottom-right to top-left
    [1, -1], // Diagonal: top-right to bottom-left
    [-1, 1], // Diagonal: bottom-left to top-right
];

const matches = (
    lines: string[],
    row: number,
    col: number,
    direction: number[],
    lineLen: number
): boolean => {
    const word = "XMAS";

    // Do not check if first char does not match
    if (lines[row][col] !== word[0]) {
        return false;
    }

    for (let i = 0; i < word.length; i++) {
        const newRow = row + i * direction[0];
        const newCol = col + i * direction[1];

        // Check bounds
        if (
            newRow < 0 ||
            newRow >= lines.length ||
            newCol < 0 ||
            newCol >= lineLen
        ) {
            return false;
        }

        const char = lines[newRow][newCol];

        // Check character
        if (char !== word[i]) {
            return false;
        }
    }
    return true;
};

const matches2 = (
    lines: string[],
    row: number,
    col: number,
    colLen: number
): boolean => {
    const rowLen = lines.length;

    // Ensure fits within bounds
    if (row - 1 < 0 || row + 1 >= rowLen || col - 1 < 0 || col + 1 >= colLen) {
        return false;
    }

    const topLeftDiagonal = [
        lines[row - 1][col - 1],
        lines[row][col],
        lines[row + 1][col + 1],
    ].join("");

    const bottomLeftDiagonal = [
        lines[row - 1][col + 1],
        lines[row][col],
        lines[row + 1][col - 1],
    ].join("");

    const validPatterns = ["MAS", "SAM"];
    return (
        validPatterns.includes(topLeftDiagonal) &&
        validPatterns.includes(bottomLeftDiagonal)
    );
};

const day4pt1 = () => {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines = input.split("\r\n");

    const lineLen = lines[0].length;
    let matchCount = 0;
    for (let row = 0; row < lines.length; row++) {
        for (let col = 0; col < lineLen; col++) {
            directions.forEach((direction) => {
                if (matches(lines, row, col, direction, lineLen)) {
                    matchCount++;
                }
            });
        }
    }
    console.log(matchCount);
};

const day4pt2 = () => {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines = input.split("\r\n");

    const lineLen = lines[0].length;
    let matchCount = 0;
    for (let row = 0; row < lines.length; row++) {
        for (let col = 0; col < lineLen; col++) {
            if (matches2(lines, row, col, lineLen)) {
                matchCount++;
            }
        }
    }
    console.log(matchCount);
};

day4pt1();
day4pt2();
