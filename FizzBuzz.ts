// Run using ts-node FizzBuzz.ts
export {};

const count = 1000;

const FizzBuzz = (): (number | string)[] => {
  let divisorMap: { [key: number]: string } = {
    3: "Fizz",
    5: "Buzz",
  };

  let res: (number | string)[] = [];

  for (var i = 1; i <= 100; i++) {
    let divres: string = "";
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
