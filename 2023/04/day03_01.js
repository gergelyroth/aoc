const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf8").trim().split("\n").map(line => line.split(""));

let res = 0;

const symbols = ["@", "#", "$", "%", "&", "*", "/", "=", "+", "-"]

function hasSymbol (data, x, y) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if(symbols.includes(data[y + i]?.[x + j])) {
                return true;
            }
        }
    }
}

let curr = "";

for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
        let neighbourSymbol = false;
        if (data[y][x] >= "0" && data[y][x] <= "9") {
            curr = data[y][x];
            neighbourSymbol = hasSymbol(data, x, y);
            if(data[y][x + 1] >= "0" && data[y][x + 1] <= "9") {
                curr += data[y][x + 1];
                x++;
                neighbourSymbol = neighbourSymbol || hasSymbol(data, x, y);
                if(data[y][x + 1] >= "0" && data[y][x + 1] <= "9") {
                    curr += data[y][x + 1];
                    x++;
                    neighbourSymbol = neighbourSymbol || hasSymbol(data, x, y);
                }
            }
            if(neighbourSymbol) {
                res += parseInt(curr);
            }
        }
        else {
            curr = "";
        }
    }
}

console.log(res);