const fs = require("node:fs");

function readFile(fileName) {
    return fs.readFileSync(fileName, "utf8").split("\n");
}

const data = readFile("./input.txt");

let numberMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
}

let res = 0;

for (let i = 0; i < data.length; i++) {
    const line = data[i];
    let firstNumber = "";
    let lastNumber = "";
    let combinedNumber = "";

    for (let j = 0; j < line.length; j++) {
        const character = line[j];
        if (character >= "0" && character <= "9") {
            firstNumber = character;
            break;
        }

        for (const num in numberMap) {
            if (line.indexOf(num) === j) {
                firstNumber = numberMap[num];
                break;
            }
        }

        if (firstNumber !== "") {
            break;
        }
    }

    for (let k = line.length - 1; k >= 0; k--) {
        const character = line[k];
        if (character >= "0" && character <= "9") {
            lastNumber = character;
            break;
        }

        for (const num in numberMap) {
            if (line.lastIndexOf(num) === k) {
                lastNumber = numberMap[num];
                break;
            }
        }

        if (lastNumber !== "") {
            break;
        }
    }

    combinedNumber = firstNumber + lastNumber;
    res += Number(combinedNumber);
}

console.log(res);
