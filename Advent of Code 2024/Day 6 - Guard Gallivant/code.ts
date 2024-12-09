import { readFileSync } from "fs";

class Guard {
    position: { x: number; y: number };
    direction: string;
    visited: Set<string>;
    map: string[][];
    directions = ["^", ">", "v", "<"];

    constructor(
        startX: number,
        startY: number,
        startDirection: string,
        map: string[][]
    ) {
        this.position = { x: startX, y: startY };
        this.direction = startDirection;
        this.visited = new Set<string>();
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
        this.visited.add(`${this.position.x},${this.position.y}`);
        // console.log(`Guard moved to (${this.position.x}, ${this.position.y})`);
    }

    startShift() {
        while (true) {
            if (!this.isInBounds()) {
                break;
            }
            // console.log(
            //     `Guard is at (${guard.position.x}, ${guard.position.y}) facing ${guard.direction}`
            // );
            // printBoard(
            //     this.map,
            //     this.position.x,
            //     this.position.y,
            //     this.direction
            // );
            if (this.isObstacleAhead()) {
                this.turnRight();
                // console.log(`Guard turned right, now facing ${guard.direction}`);
            } else {
                this.move();
            }
        }
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
};

const day6 = () => {
    const input = readFileSync("input.txt", "utf8");
    // read input into a 2d array
    const inputArr = input.split("\n").map((line) => line.split(""));

    const startPosition = { x: 0, y: 0 };
    const startDirection = "^";

    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr[i].length; j++) {
            if (inputArr[i][j] === "#") {
                // console.log(i, j)
            }
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
};

day6();
