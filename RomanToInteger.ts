const romanToInt = (s: string): number => {
  const numeralMap = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let roman: string = s[i];
    let value = numeralMap.get(roman);

    // I can be placed before V (5) and X (10) to make 4 and 9.
    // X can be placed before L (50) and C (100) to make 40 and 90.
    // C can be placed before D (500) and M (1000) to make 400 and 900.
    let nextRoman = s[i + 1];
    if (roman === "I" && (nextRoman === "V" || nextRoman === "X")) {
      i++;
      if (nextRoman === "V") sum += 4;
      else if (nextRoman === "X") sum += 9;
    } else if (roman === "X" && (nextRoman === "L" || nextRoman === "C")) {
      i++;
      if (nextRoman === "L") sum += 40;
      else if (nextRoman === "C") sum += 90;
    } else if (roman === "C" && (nextRoman === "D" || nextRoman === "M")) {
      i++;
      if (nextRoman === "D") sum += 400;
      else if (nextRoman === "M") sum += 900;
    } else {
      sum += value!;
    }
  }

  return sum;
};

const testRomanToInt = () => {
  const tests = [
    { input: "III", expected: 3 },
    { input: "LVIII", expected: 58 },
    { input: "MCMXCIV", expected: 1994 },
    { input: "IV", expected: 4 },
    { input: "IX", expected: 9 },
    { input: "XL", expected: 40 },
    { input: "XC", expected: 90 },
    { input: "CD", expected: 400 },
    { input: "CM", expected: 900 },
    { input: "MMMCMXCIX", expected: 3999 },
    { input: "I", expected: 1 },
    { input: "XX", expected: 20 },
  ];

  tests.forEach(({ input, expected }, index) => {
    const result = romanToInt(input);
    if (result === expected) {
      console.log(`Test ${index + 1}: Passed`);
    } else {
      console.log(
        `Test ${
          index + 1
        }: Failed (Input: "${input}", Expected: ${expected}, Got: ${result})`
      );
    }
  });
};

// Call the test function
testRomanToInt();
