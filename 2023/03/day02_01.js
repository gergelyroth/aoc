const fs = require("node:fs");

function readFile(fileName) {
    return fs.readFileSync(fileName, "utf8").split("\n");
}

const data = readFile("./input.txt");

const maxCubes = {
    red: 12,
    green: 13,
    blue: 14,
}

let res = 0;

for (let i = 0; i < data.length; i++) {
    const line = data[i];
    const [firstPart, secondPart] = line.split(":");
    const [, gameId] = firstPart.split(" ");
    let isValid = true;

    const sets = secondPart.split(";").map(s => s.trimStart()) ;

    for (const set of sets) {
        const cubes = set.split(", ");
        for (const cube of cubes) {
            const [num, color] = cube.split(" ");
            if (maxCubes[color] < num) {
                isValid = false;
            }
        }
    }

    if (isValid)
        res += Number(gameId);
}

console.log(res);


