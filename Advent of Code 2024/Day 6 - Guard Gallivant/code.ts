import { readFileSync } from "fs";

class Guard {
    position: { x: number; y: number };
    direction: string;
    visited: Set<string>;
    map: string[][];
    directions = ["^", ">", "v", "<"];
    startDirection: string;

    constructor(
        startX: number,
        startY: number,
        startDirection: string,
        map: string[][]
    ) {
        this.position = { x: startX, y: startY };
        this.direction = startDirection;
        this.startDirection = startDirection;
        this.visited = new Set<string>().add(`${startX},${startY}`);
        this.map = map;
    }

    turnRight() {
        const currentIndex = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndex + 1) % 4];
    }

    isInBounds() {
        return (
            this.position.x >= 0 &&
            this.position.x < this.map[0].length &&
            this.position.y >= 0 &&
            this.position.y < this.map.length
        );
    }

    isObstacleAhead(): boolean {
        const { x, y } = this.position;
        // find coords of next move
        switch (this.direction) {
            case "^": // move up
                return y > 0 && this.map[y - 1][x] === "#";
            case ">": // move right
                return x < this.map[0].length - 1 && this.map[y][x + 1] === "#";
            case "v": // move down
                return y < this.map.length - 1 && this.map[y + 1][x] === "#";
            case "<": // move down
                return x > 0 && this.map[y][x - 1] === "#";
        }
        return false;
    }

    move() {
        const { x, y } = this.position;
        switch (this.direction) {
            case "^": // move up
                this.position = { x: x, y: y - 1 };
                break;
            case ">": // move right
                this.position = { x: x + 1, y: y };
                break;
            case "v": // move down
                this.position = { x: x, y: y + 1 };
                break;
            case "<": // move down
                this.position = { x: x - 1, y: y };
                break;
        }
        if (this.isInBounds()) {
            this.visited.add(`${this.position.x},${this.position.y}`);
        }
    }

    startShift() {
        while (true) {
            if (!this.isInBounds()) {
                break;
            }

            if (this.isObstacleAhead()) {
                this.turnRight();
            } else {
                this.move();
            }
        }
    }

    detectLoop() {
        const visitedStates = new Set<string>();
        while (true) {
            if (!this.isInBounds()) {
                break;
            }
            const state = `${this.position.x},${this.position.y},${this.direction}`;
            if (visitedStates.has(state)) {
                // Loop detected
                return true;
            }
            visitedStates.add(state);

            if (this.isObstacleAhead()) {
                this.turnRight();
            } else {
                this.move();
            }
        }
        return false;
    }
}

const printBoard = (
    map: string[][],
    guardX: number,
    guardY: number,
    direction: string
) => {
    const board = map.map((row, y) =>
        row
            .map((cell, x) => (x === guardX && y === guardY ? direction : cell))
            .join("")
    );
    console.log(board.join("\n"));

    console.log("===============");
};

const day6 = () => {
    const input = readFileSync("input.txt", "utf8");
    // read input into a 2d array
    const inputArr = input.split("\n").map((line) => line.split(""));

    const startPosition = { x: 0, y: 0 };
    const startDirection: string = "^";

    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr[i].length; j++) {
            if (inputArr[i][j] === "^") {
                startPosition.x = j;
                startPosition.y = i;
                inputArr[i][j] = ".";
            }
        }
    }

    const guard = new Guard(
        startPosition.x,
        startPosition.y,
        startDirection,
        inputArr
    );
    guard.startShift();

    console.log("Part 1 answer: ", guard.visited.size);

    let addedObstructionCounter = 0;

    guard.visited.forEach((coords) => {
        const [x, y] = coords.split(",");

        // Skip starting position
        if (
            parseInt(x) === startPosition.x &&
            parseInt(y) === startPosition.y
        ) {
            return;
        }

        // Create a deep copy of the map
        const tempMap = guard.map.map((row) => [...row]);

        tempMap[parseInt(y)][parseInt(x)] = "#";

        const tempGuard = new Guard(
            startPosition.x,
            startPosition.y,
            startDirection,
            tempMap
        );

        if (tempGuard.detectLoop()) {
            addedObstructionCounter++;
        }
    });
    console.log("Part 2 answer: ", addedObstructionCounter);
};

day6();
