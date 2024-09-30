const fs = require("node:fs");

function readFile(fileName) {
    return fs.readFileSync(fileName, "utf8").split("\n");
}

const data = readFile("./input.txt");

let res = 0;

data.forEach((line) => {
    const [, subsets] = line.split(": ");
    const sets = subsets.split("; ");
    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;

    sets.forEach((set) => {
        const counts = {red: 0, green: 0, blue: 0};

        set.split(", ").forEach(cube => {
            const [count, color] = cube.split(" ");
            counts[color] += parseInt(count, 10);
        });

        if (counts.red > maxRed)
            maxRed = counts.red;

        if (counts.blue > maxBlue)
            maxBlue = counts.blue;

        if (counts.green > maxGreen)
            maxGreen = counts.green;
    });
    res += (maxRed * maxGreen * maxBlue);
});

console.log(res);


