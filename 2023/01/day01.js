const fs = require("node:fs");

function readFile(fileName) {
    return fs.readFileSync(fileName, "utf8").split("\n");
}

const data = readFile("./input.txt");

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
    }

    for (let k = line.length - 1; k >= 0; k--) {
        const character = line[k];
        if (character >= "0" && character <= "9") {
            lastNumber = character;
            break;
        }
    }

    combinedNumber = firstNumber + lastNumber;
    res += Number(combinedNumber);
}

console.log(res);

