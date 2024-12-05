import * as fs from "fs";
import { binarySearch, lowerBound, upperBound } from "../../utils/BinarySearch";

const createLists = () => {
  // read input.txt file
  const input = fs.readFileSync("input.txt", "utf8");
  const lines = input.split("\n");

  // create a map of locations
  const leftList: number[] = [];
  const rightList: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const [left, right] = line.split("   ");

    leftList.push(parseInt(left));
    rightList.push(parseInt(right));
  }
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);
  return [leftList, rightList];
};

const createFrequencyMap = (arr: number[]): Map<number, number> => {
  const frequencyMap = new Map<number, number>();

  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  return frequencyMap;
};

const pt1 = () => {
  const [leftList, rightList] = createLists();

  let sum = 0;
  for (let i = 0; i < leftList.length; i++) {
    let distance = Math.abs(leftList[i] - rightList[i]);
    sum += distance;
  }
  console.log("Distances", sum);
};

const pt2 = () => {
  // TODO: Dont sort right list for better performance
  const [leftList, rightList] = createLists();
  let frequencyMap = createFrequencyMap(rightList);

  let sum = 0;
  for (let i = 0; i < leftList.length; i++) {
    let value = leftList[i];
    // let frequency = upperBound(rightList, value) - lowerBound(rightList, value);
    let similarityScore = value * (frequencyMap.get(value) || 0);
    sum += similarityScore;
  }
  console.log(sum);
};

pt2();
