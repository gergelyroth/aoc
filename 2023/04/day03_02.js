const fs = require("fs");

const data = fs.readFileSync('./input.txt', 'utf8').trim().split("\n").map(line => line.split(''));

const symbols = ['*'];

let result = 0;

function hasSymbol (data, x, y) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (symbols.includes(data?.[y+i]?.[x+j])) {
                return `${y+i},${x+j}`;
            }
        }
    }
    return false;
}

const stars = {};

let currentNumber = '';

for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
        let neighbourSymbol = false;
        if (data[y][x] >= '0' && data[y][x] <= '9') {
            currentNumber = data[y][x];
            neighbourSymbol = hasSymbol(data, x, y);
            if (data[y][x+1] >= '0' && data[y][x+1] <= '9') {
                currentNumber += data[y][x+1];
                x++;
                neighbourSymbol = neighbourSymbol || hasSymbol(data, x, y);
                if (data[y][x+1] >= '0' && data[y][x+1] <= '9') {
                    currentNumber += data[y][x+1];
                    x++;
                    neighbourSymbol = neighbourSymbol ||hasSymbol(data, x, y);
                }
            }

            if (neighbourSymbol) {
                stars[neighbourSymbol] = stars[neighbourSymbol] || [];
                stars[neighbourSymbol].push(Number(currentNumber));
            }
        }
        else {
            currentNumber = '';
        }
    }
}

for (const star of  Object.values(stars)) {
    if (star.length === 2) {
        result += star[0] * star[1];
    }
}

console.log(result);